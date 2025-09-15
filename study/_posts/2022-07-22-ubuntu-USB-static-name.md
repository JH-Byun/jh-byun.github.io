---
layout: single
title: "[Ubuntu 18.04] Bind a USB device under a static name"
use_math: true
---
When you use multiple USB devices with your Ubuntu 18.04, their kernel information (e.g. /dev/ttyUSB0) might vary every time you connect and disconnect them to your PC.
Therefore, if you have something to do with the kernel information of a USB device, you need to set the kernel name of the USB device.
In this post, I will show you how to bind a USB device under a static name.

## Procedure
### 1. Find the kernel name of the USB device you want to bind
At first, connect your USB device to your PC and type the following command on the terminal.
<pre>
<code>
ls /dev/
</code>
</pre>
Then, disconnect the USB device and type the above command again. If your USB device works properly, one kernel will be missing.
Memorize or note the name of missing kernel. 
For the explanation, I will use "/dev/ttyUSB0" as an example of a kernel's name.

### 2. Find information on the connected USB
Connect the USB device again, and type the following command.
<pre>
<code>
udevadm info --name=/dev/ttyUSB0 --attribute-walk
</code>
</pre>
On your terminal, the *Udevadm* information is shown.
Among a number of results, find the lines shown as follows:
<br> ------------------------------------------------------- 
<br> ... 
<br> ATTRS{devnum}=="x" 
<br> ATTRS{devpath}=="y"
<br> **ATTRS{idProduct}=="zzzz"**
<br> **ATTRS{idVendor}=="wwww"**
<br> ATTRS{ltm_capable}=="no"
<br> ...
<br> -------------------------------------------------------

### 3. Edit or create a file related to the kernel information
Move to the directory */etc/udev/rules.d/*,
<pre>
<code>
cd /etc/udev/rules.d
</code>
</pre>
then create a file 99-usb-serial.rules.
<pre>
<code>
sudo gedit 99-usb-serial.rules
</code>
</pre>
In this file, type the following statements with your device name:
<pre>
  <code>
SUBSYSTEM=="tty", ATTRS{idVendor}=="wwww", ATTRS{idProduct}=="zzzz", SYMLINK+="device_name"
  </code>
</pre>

### 4. Load a new rule and verify the change
Load the new rule,
<pre>
<code>
sudo udevadm trigger
</code>
</pre>
then check if the static name setting is done properly
<pre>
<code>
ls -l /dev/device_name
</code>
</pre>


## Reference
https://unix.stackexchange.com/questions/66901/how-to-bind-usb-device-under-a-static-name
