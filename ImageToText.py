import pyautogui
import pytesseract
import time

[a, b] = pyautogui.size()


def giveString():
    lines = []
    [clientx1, clienty1] = pyautogui.position()
    time.sleep(5)
    [clientx2, clienty2] = pyautogui.position()
    if (clientx1 == clientx2 and clienty1 == clienty2):
        screenshot = pyautogui.screenshot(region=(0, clienty1-30, a-1, 60))
        screenshot.save("newScreenshot.png")
        extracted_text = pytesseract.image_to_string(screenshot)
        lines = extracted_text.splitlines()
        return lines
    return lines
