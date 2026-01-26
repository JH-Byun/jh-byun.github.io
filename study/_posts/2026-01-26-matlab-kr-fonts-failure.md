---
layout: single
title: "[MATLAB] (Korean) Ubuntu 20.04에서 MATLAB 설치 후 실행 시 폰트가 깨지는 문제 해결"
use_math: true
---
우리에게 익숙한 운영체제인 Windows가 아닌 Ubuntu상에서 MATLAB을 설치 및 실행시킬 경우, Ubuntu가 영어로 설치되지 않은 경우 아래와 같은 폰트 깨짐 현상이 발생할 수 있습니다.
<p>
<center><img src="/images/tumbnails/matlab_before_font_failure_repair.png" width="809" height="809"></center></p>
(출처: https://kr.mathworks.com/matlabcentral/answers/2132191-)

이런 현상이 발생할 경우, 아래와 같이 간단한 방법으로 이 문제를 해결할 수 있습니다.

## Procedure
### Step 1: 나눔 폰트 설치
**매트랩 창이 아닌** ubuntu의 terminal 창에 아래와 같이 입력 후 enter를 눌러 나눔 폰트를 시스템 상에 설치한다.
```
sudo apt-get install fonts-nanum fonts-nanum-coding fonts-nanum-extra
```

이 과정을 거치면, 아래 사진과 같이 폰트 깨짐이 발생하지 않음을 알 수 있다.
<p>
<center><img src="/images/tumbnails/matlab_after_font_failure_repair.png" width="921" height="1053"></center></p>

## Reference
[1] https://kr.mathworks.com/matlabcentral/answers/2132191-
