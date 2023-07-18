from ImageToText import giveString
from text_speech import text_to_speech


def feature():
    while True:
        newString = giveString()
        if (len(newString) != 0):
            strings = text_to_speech(newString[0])
            text_to_speech(strings)
