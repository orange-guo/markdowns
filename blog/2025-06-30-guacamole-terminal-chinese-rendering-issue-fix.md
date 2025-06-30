---
authors: [ orange ]
tags: [ troubleshooting, guacamole, guacamole-server, guacd, ssh, linux, terminal, rendering, c ]
---

# 将`Apache Guacamole`从`1.5.5`升级到`1.6.0`版本后SSH终端粘贴中文首个字符不显示问题排查与解决

在将`Apache Guacamole`从`1.5.5`升级到`1.6.0`版本后，遇到了一个的问题：
在使用SSH终端时，粘贴中文文本的第一个字符无法正常显示。

![cfb396cc38020b333834ea53436e0ba7116734666aeeaa7766b031579fe28de0.png](/blog/cfb396cc38020b333834ea53436e0ba7116734666aeeaa7766b031579fe28de0.png)

从本地复制一段以中文字符开头的文本（例如：“我是人”）并粘贴到Guacamole终端中时，屏幕上显示的并非完整的`我是人`，而是`是人`，开头的`我`字不翼而飞。
经过一番排查和测试，最终找到了问题的根源并给出了解决方案。

<!--truncate-->

## 日志信息

从`guacd`内部的渲染流程入手，开启了详细的`Debug`日志。
当粘贴“我”字时，捕获到以下核心日志片段：

```text
guacd[...]: DEBUG:    Rendering char: row=39, col=26, codepoint=0x6211 ('我'), width=2
guacd[...]: DEBUG:    set_columns: Primary set for row=39, cols=[26,27], char=0x6211('我'), width=2
guacd[...]: DEBUG:    display_set_columns: row=39, input_start_col=26, input_end_col=27, char_codepoint=0x6211 ('我'), char_width=2
guacd[...]: DEBUG:    display_set_columns: Starting loop to set columns from 26 to 27 (char_width=2).
guacd[...]: DEBUG:    display_set_columns: Processing col 26, current_op_type=0 (GUAC_CHAR_COPY=1)
guacd[...]: DEBUG:    display_set_columns: Set op for col 26: type=2, char_codepoint=0x6211.
guacd[...]: DEBUG:    display_set_columns: Marking unflushed_set for row 39.
guacd[...]: DEBUG:    set_columns: Cursor detected at row=39, col=26. Character width is 2.
guacd[...]: DEBUG:    set_columns: Redrawing cursor char. Original visible_cursor_col=26. Adjusted redraw range: [26,27].
guacd[...]: DEBUG:    display_set_columns: row=39, input_start_col=26, input_end_col=26, char_codepoint=0x6211 ('我'), char_width=2  # <-- 第一次异常覆盖点
guacd[...]: DEBUG:    display_set_columns: Starting loop to set columns from 26 to 26 (char_width=2).
guacd[...]: DEBUG:    display_set_columns: Processing col 26, current_op_type=2 (GUAC_CHAR_COPY=1)
guacd[...]: DEBUG:    display_set_columns: Set op for col 26: type=2, char_codepoint=0x6211.
guacd[...]: DEBUG:    display_set_columns: Marking unflushed_set for row 39.
# ... (其他字符正常处理) ...
guacd[...]: DEBUG:    display_set_columns: row=39, input_start_col=26, input_end_col=26, char_codepoint=0x20 (' '), char_width=1 # <-- 最终致命覆盖
guacd[...]: DEBUG:    display_set_columns: Starting loop to set columns from 26 to 26 (char_width=1).
guacd[...]: DEBUG:    display_set_columns: Processing col 26, current_op_type=2 (GUAC_CHAR_COPY=1)
guacd[...]: DEBUG:    display_set_columns: Set op for col 26: type=2, char_codepoint=0x20.
guacd[...]: DEBUG:    display_set_columns: Marking unflushed_set for row 39.
```

以上日志揭示的核心问题链条：

`我`字初次设置是正确的： guac_terminal_set 初次调用set_columns时，传入的范围 [26,27] (宽度为2) 是符合中文显示需求的。
光标重绘的“副作用”： 当光标恰好位于这个字符的起始列 (col=26) 时，set_columns 内部的光标重绘逻辑被触发。
然而，此处再次调用 display_set_columns 时，传入的 input_end_col=26 变成了单列范围，导致对双宽字符的不完整覆盖。

- 在所有字符处理完毕后，guac_terminal_commit_cursor 或相关清理逻辑介入，对 col=26 这个位置执行了一次额外的“清空”操作（将该位置设置为 0x20 空格）。这彻底抹去了“我”字在屏幕上的显示痕迹。
- 其他中文字符（如“是”、“人”）之所以能正常显示，是因为它们没有像“我”字那样，在渲染过程中被多次、不完整地覆盖，也没有被后续的误清理操作殃及。

## 问题原因

> 双宽字符操作的“错位”， 问题的根本在于 Guacamole 终端在处理双宽度字符（如中文，占用两列显示空间）时，其内部状态管理和重绘机制中的“错位写入”和“不完全覆盖”缺陷。

- 缺陷一： guac_terminal_set_columns 函数中的光标重绘逻辑，在处理与光标重叠的双宽度字符时，未能正确地将完整的两列范围传递给底层显示排队。它错误地只更新了字符的第一列，导致显示缓冲区中该字符的状态不完整。
- 缺陷二： guac_terminal_commit_cursor 函数（负责光标的清除与绘制）在执行相关操作时，也存在类似的问题。它最终将不完整的双宽度字符误认为“脏”或“空闲”，从而使用单列的空格或空字符指令彻底覆盖了第一个中文字符的显示。

这些缺陷导致了显示缓冲区中字符状态的混淆和相互覆盖，最终表现为中文首字无法正常显示。

## 解决方案

问题定位到 src/terminal/terminal.c 文件中的`guac_terminal_set_columns`函数。我们需要修正其内部光标重绘逻辑，确保在处理双宽度字符时，始终以其完整的显示宽度来更新显示缓冲区。

修改后的`guac_terminal_set_columns`代码：

```c title="src/terminal/terminal.c"
void guac_terminal_set_columns(guac_terminal* terminal, int row, int start_column, int end_column, guac_terminal_char* character) {

    // Primary set for the character
    // 第一次将字符写入缓冲区，确保是完整两列
    __guac_terminal_set_columns(terminal, row, start_column, end_column, character);

    /* If visible cursor in current row, preserve state */
    // 如果光标在当前行，并且其位置与当前设置的字符区域重叠
    if (row == terminal->visible_cursor_row
            && terminal->visible_cursor_col >= start_column
            && terminal->visible_cursor_col <= end_column) {

        guac_terminal_char cursor_character = *character;
        cursor_character.attributes.cursor = true;

        // 【核心修复】计算实际需要重绘的起始列和结束列，以覆盖整个字符的宽度
        int cursor_redraw_start_col = terminal->visible_cursor_col;
        int cursor_redraw_end_col = terminal->visible_cursor_col + character->width - 1;

        // 确保重绘范围不会超出原始的设置范围 (安全边界)
        if (cursor_redraw_start_col < start_column)
            cursor_redraw_start_col = start_column;
        if (cursor_redraw_end_col > end_column)
            cursor_redraw_end_col = end_column;

        // 重新提交字符，这次要确保带有光标属性的字符覆盖其完整的两列
        __guac_terminal_set_columns(terminal, row,
                                    cursor_redraw_start_col,
                                    cursor_redraw_end_col,
                                    &cursor_character);
    }
}
```

这段修改确保了所有对双宽度字符的`SET`操作（无论是初次放置还是光标重绘）都能够正确地处理其完整宽度。
消除了显示缓冲区中的不一致状态，避免了后续的错误覆盖。

经测试，中文首字渲染问题得以解决，字符能够正常显示。

![90a58c10166073ac640466ef4bee4a7ba4350970690cdf38a6a22c74d02240f8.png](/blog/90a58c10166073ac640466ef4bee4a7ba4350970690cdf38a6a22c74d02240f8.png)

## 参考资料

- [Guacamole Issue](https://issues.apache.org/jira/projects/GUACAMOLE/issues/GUACAMOLE-2091)