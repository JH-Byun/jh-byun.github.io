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
Remember or note the name of missing kernel. 
For the explanation, I will use "/dev/ttyUSB0" as an example of a kernel's name.

### 2. Find information on the connected USB
Connect the USB device again, and type the following command.
<pre>
<code>
udevadm info ==name=/dev/ttyUSB0 --attribute-walk
</code>
</pre>
On your terminal, the **Udevadm** information is shown.
Among a number of results, find the lines shown as follows:
<br> --- </br>
<br> --- </br>

### 3. Edit or create a file related to the kernel information
<pre>
<code>
git checkout -b new_branch
</code>
</pre>


### 4. Load a new rule and verify the change
To add a new branch (name: new_branch) to the local space (e.g. personal laptop, desktop)
And to push it to the remote space (e.g. github space)  
<pre>
<code>
git push origin new_branch
</code>
</pre>
**Caution**: Make the remote branch on the desired local branch. 
 
 ## Reference
 https://unix.stackexchange.com/questions/66901/how-to-bind-usb-device-under-a-static-name
