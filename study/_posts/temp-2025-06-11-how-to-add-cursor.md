---
layout: single
title: "[Ubuntu] Cursor Installation & Execution via terminal"
use_math: true
---
[Cursor](https://cursor.sh/) is an open source AI-integrator code editor based on Visual Studio Code (or vscode).

In this post, I will present you the below stuffs:
1) How to install Cursor in Ubuntu 20.04 or later version?
2) How to execute Cursor with the terminal?

* Operating System: Ubuntu 20.04 or later, 64 bits
* Cursor version: 1.0.0-x84_64

## Procedure
### Step 1: Download the AppImage
Access to [Cursor](https://cursor.sh/), log-in, and download the AppImage (for Linux). 

### Step 2: Make the AppImage file executable
In normal cases, the AppImage will be downloaded on the directory "~/Downloads/".
Hence, open the terminal, and navigate to the above directory as follows:
```
cd ~/Downloads
```

Then, make the AppImage executable.
```
chmod +x Cursor-1.0.0-x84_64.AppImage
```

Finally, follow the instruction, then Cursor will be installed.

### Step 3: Set 
Unlike ubun

To add the dependency on CasADi in your ROS package, add the following command lines on their proper locations (They depend on your originally made CMakeLists.txt).
```
  (omission)
  ...
  set(CASADI_INCLUDE_DIRS /usr/local/include/casadi)
  set(CASADI_LIBRARIES /usr/local/lib/libcasadi.so)
  ...
  (syncopation)
  ...
  include_directories( ${CASADI_INCLUDE_DIRS} )
  ...
  (syncopation)
  ...
  target_link_libraries(<your node name> ${catkin_LIBRARIES} ... ${CASADI_LIBRARIES})
  ...
  (omission)
```
Then, add the casadi header fiie on your c++-coded node.

## (Option) qpOASES addition process

To use the qpOASES, go back to your default installation location and execute the following commands on your terminal. (In my case, it was "Documents" folder.)
```
git clone https://github.com/coin-or/qpOASES.git
cd qpOASES
mkdir build
cd build
cmake ..
make -j4
sudo make install
```
Then, go back to your casadi build folder (<path/to/casadi/installation>/casadi/build, in my case, ~/Documents/casadi/build/), then execute the following commands:
```
cmake .. -DWITH_QPOASES=ON -DWITH_LAPACK=ON
make -j4
sudo make install
```

## Reference
https://dev.to/mwacharo6/how-to-install-cursor-ai-on-ubuntu-the-easy-way-1i2d

