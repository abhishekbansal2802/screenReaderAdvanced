from interface import interface
import threading

if __name__ == "__main__":
    threading.Thread(target=interface()).start()
