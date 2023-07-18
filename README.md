# Team-44 Ctrl Alt Defeat

# EyeHear

EyeHear is a Python-based solution that allows users to capture screen content at the cursor position, extract text using OCR, and convert it to speech. The solution includes a graphical user interface (GUI) and a web app that are linked through buttons. It allows the users to hear the text in real-time while hovering their cursur over the text. 

## Features

- Capture the screen at the cursor position and extract text using OCR (Optical Character Recognition)
- Convert the extracted text to speech using the gTTS (Google Text-to-Speech) library
- Open a web app connected to the GUI through a button
- Select an image file for OCR using a file dialog in the GUI

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- Python 3.x
- tkinter library (for GUI)
- PIL library (for image processing)
- pytesseract library (for OCR)
- gtts library (for text-to-speech conversion)

You can install the required dependencies using pip:

```
pip install -r requirements.txt
```

## Usage

1. Clone the repository:

```
git clone https://github.com/your-username/screen-text-reader.git
```

2. Navigate to the project directory:

```
cd screen-text-reader
```

3. Run the application:

```
python main.py
```

4. The GUI will open 
