from gtts import gTTS
import os
from playsound import playsound
from pathlib import Path


def text_to_speech(s):
    language = 'hi'
    myobj = gTTS(text=s, lang=language, slow=False)
    myobj.save("audio.mp3")
    Path("audio.")
    playsound('audio.mp3')
    os.remove("audio.mp3")
