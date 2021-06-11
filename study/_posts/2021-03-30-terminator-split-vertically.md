---
title: "[Ubuntu 20.04] Enable the Ctrl+Shift+E Key setting for splitting the terminator window vertically."
---
## Motivation
If we upgrade our ubuntu version to 20.04 and install TERMINATOR, there exists a problem that the key setting Ctrl+Shit+E doesn't work for splitting its window vertically.
To resolve this problem, I search on google and found the appropriate solution.

## Solution
1. Download Terminator on your Ubuntu 20.04.
2. Open the terminal (Ctrl + Alt + t) and try Ctrl + Shift + E.
3. If the underlined letter '<u>e</u>' appears and the terminal stops operating, it means that there exist a problem in vertically splitting.
4. In the terminal window, type 'ibus-setup'.
```terminal
ibus-setup
```
5. A window will appear, then click on the tab 'Emoji' and delete the keybindings for "Emoji annotation".

## Reference
[1] <https://snowdeer.github.io/mac-os/2020/09/22/ctrl-shift-e-key-on-ubuntu-20p04/> (Written in Korean)

