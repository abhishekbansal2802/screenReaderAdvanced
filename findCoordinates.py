import pyautogui
import numpy as np
import cv2

[a,b] = pyautogui.size()
[c,d] = pyautogui.position()

image = pyautogui.screenshot(region=(c,d,a-1,b-1))
   
image = cv2.cvtColor(np.array(image),cv2.COLOR_RGB2BGR)
   
cv2.imwrite("edc.png", image)