## XDG

> XDG is an abbreviation for the X Desktop Group, now known as freedesktop.org. freedesktop.org creates and maintains
> specifications and software related to desktop systems.

### xdg-utils

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

### file association

```bash
sudo cp /var/lib/snapd/desktop/applications/intellij-idea-ultimate_intellij-idea-ultimate.desktop /usr/share/applications/
xdg-mime default intellij-idea-ultimate_intellij-idea-ultimate.desktop text/x-java
xdg-mime query filetype /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java
xdg-mime query default text/x-java
xdg-open /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java
```

### desktop entries

```bash
for p in ${XDG_DATA_DIRS//:/ }; do
  find $p/applications -name '*.desktop'
done
```

### References

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
  The XDG Autostart specification defines a method for autostarting ordinary desktop entries on desktop environment startup and removable medium mounting, by placing them in specific #Directories.


**Utils**

- [Desktop Application Autostart Specification](https://specifications.freedesktop.org/autostart-spec/autostart-spec-latest.html)
- [xdg-utils](https://wiki.archlinux.org/title/Xdg-utils)

### List

```bash
xdg-mime
xdg-open
```

## Xorg

- [X Window System](https://en.wikipedia.org/wiki/X_Window_System)
- [Xorg](https://wiki.archlinux.org/title/Xorg)
- [Xorg Applications](https://www.linuxfromscratch.org/blfs/view/svn/x/x7app.html)
- [xinit](https://wiki.archlinux.org/title/Xinit)
- [xprofile](https://wiki.archlinux.org/title/Xprofile)
- [X resources](https://wiki.archlinux.org/title/X_resources)

### Packages

```bash
# is the ICE authority file utility
iceauth
# creates an index of X font files in a directory
mkfontdir
# creates an index of scalable font files for X
mkfontscale
# manages utmp/wtmp entries for non-init clients
sessreg
# sets the keyboard using the X Keyboard Extension
setxkbmap
# is the Session Manager Proxy
smproxy
# is an X11 server performance test program
x11perf
# is an X11 server performance comparison program
x11perfcomp
# is the X authority file utility
xauth
# adjusts backlight brightness using RandR extension
xbacklight
# is the Device Color Characterization utility for the X Color Management System
xcmsdb
# creates an X cursor file from a collection of PNG images
xcursorgen
# dumps an X window directly to a printer
xdpr
# is a display information utility for X
xdpyinfo
# queries configuration information of DRI drivers
xdriinfo
# prints contents of X events
xev
# alters a monitor's gamma correction through the X server
xgamma
# is a server access control program for X
xhost
# is a utility to configure and test X input devices
xinput
# is an XKB utility program that raises a bell event
xkbbell
# compiles an XKB keyboard description
xkbcomp
# is the XKB event daemon
xkbevd
# shows the XKB status of keyboard LEDs
xkbvleds
# monitors modifier keys and LEDs
xkbwatch
# kills a client by its X resource
xkill
# lists interned atoms defined on the server
xlsatoms
# lists client applications running on a display
xlsclients
# displays a message or query in a window
xmessage
# is a utility for modifying keymaps and pointer button mappings in X
xmodmap
# prints an X window dump
xpr
# is a property displayer for X
xprop
# is a primitive command line interface to RandR extension
xrandr
# is the X server resource database utility
xrdb
# refreshes all or part of an X screen
xrefresh
# is the user preference utility for X
xset
# is the root window parameter setting utility for X
xsetroot
# prints out X-Video extension adaptor information
xvinfo
# dumps an image of an X window
xwd
# is a window information utility for X
xwininfo
# is an image displayer for X
xwud
```

### Screen resolution

[Getting and setting screen size for Xorg](https://unix.stackexchange.com/questions/2672/getting-and-setting-screen-size-for-xorg)

```bash
# get screen resolution
xrandr 
# set screen resolution
xrandr --output default --mode 2560x1660
```

### List

```bash
xlsclients
xwininfo
xprop
xrandr
xdpyinfo
# xterm
```

## Tools

```bash
xdotool
wmctrl
```

### set window size

```bash
function do_resize() {
  while true; do
    sleep 1s
    if [ ! -n "$(xlsclients || true)" ]; then
      echo "Waiting for window"
      continue
    fi
    echo "Window found"
    screen_size=$(xrandr | grep '*' | awk '{print $1}' | tr 'x' ' ')
    for id in $(xwininfo -root -children -tree | awk '{print $1}' | grep '0x'); do
      xdotool windowsize $id $screen_size
      xdotool windowmove $id 0 0
    done
    break
  done
}

timeout 1m do_resize &

xdg-open /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java
```