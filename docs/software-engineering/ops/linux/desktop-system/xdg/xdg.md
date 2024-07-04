# XDG

> XDG is an abbreviation for the X Desktop Group, now known as freedesktop.org. freedesktop.org creates and maintains
> specifications and software related to desktop systems.

## xdg-utils

```bash
# Install desktop menu items
xdg-desktop-menu
# copies desktop entries to the user's desktop
xdg-desktop-icon
# Compose a new email in the user's preferred email client, potentially with subject and other info filled in
xdg-email
# Install icon resources
xdg-icon-resource
# Query and install MIME types and associations
xdg-mime
# Open a file or URI in the user's preferred application
xdg-open
# Enable, disable, or suspend the screensaver
xdg-screensaver
# Get or set the default web browser and URL handlers
xdg-settings
```

## file association

```bash
sudo cp /var/lib/snapd/desktop/applications/intellij-idea-ultimate_intellij-idea-ultimate.desktop /usr/share/applications/
xdg-mime default intellij-idea-ultimate_intellij-idea-ultimate.desktop text/x-java
xdg-mime query filetype /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java
xdg-mime query default text/x-java
xdg-open /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java
```

## desktop entries

```bash
for p in ${XDG_DATA_DIRS//:/ }; do
  find $p/applications -name '*.desktop'
done
```

## References

- [xdg-utils](https://www.freedesktop.org/wiki/Software/xdg-utils/)
- [freedesktop.org](https://en.wikipedia.org/wiki/Freedesktop.org)
- [freedesktop.org](https://www.freedesktop.org/wiki/)
- [Freedesktop.org Specifications](https://specifications.freedesktop.org/)

**Desktop Entry**

- [Desktop Entry Specification](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html)
- [Desktop entries](https://wiki.archlinux.org/title/desktop_entries)

**MIME Application**

- [Association between MIME types and applications](https://specifications.freedesktop.org/mime-apps-spec/mime-apps-spec-latest.html)
- [XDG MIME Applications](https://wiki.archlinux.org/title/XDG_MIME_Applications)
- [Default applications](https://wiki.archlinux.org/title/default_applications)

**Autostart**

- [XDG Autostart](https://wiki.archlinux.org/title/XDG_Autostart)
  <br/>
  The XDG Autostart specification defines a method for autostarting ordinary desktop entries on desktop environment
  startup and removable medium mounting, by placing them in specific #Directories.

**Utils**

- [Desktop Application Autostart Specification](https://specifications.freedesktop.org/autostart-spec/autostart-spec-latest.html)
- [xdg-utils](https://wiki.archlinux.org/title/Xdg-utils)

## List

```bash
xdg-mime
xdg-open
```