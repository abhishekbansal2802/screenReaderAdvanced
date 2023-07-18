from tkinter import *
from tkinter import filedialog
from features import feature
import webbrowser


def interface():
    root = Tk()
    root.title('EyeHear')

    def startApp():
        feature()

    def exitApp():
        root.quit()

    def showRecord():
        root.filename = filedialog.askopenfilename(
            initialdir="./", title="View Recordings", filetypes=(("jpeg files", "*.jpg"), ("all files", "*.*")))

    def visitLink():
        url = 'http://www.iandeye.in/'
        webbrowser.open(url)

    # add logo
    image = PhotoImage(file="logo.png")
    small_img = image.subsample(4, 4)

    img = Label(root, image=small_img)
    img.grid(row=0, column=0, rowspan=6, padx=5, pady=5)

    Button1 = Button(root, text="Start Screen Reading",
                     command=startApp, fg="blue", bg="#FFFFFF")
    Button4 = Button(root, text="Exit", command=exitApp,
                     fg="blue", bg="#FFFFFF")
    Button3 = Button(root, text="Show Recording",
                     command=showRecord, fg="blue", bg="#FFFFFF")
    Button2 = Button(root, text="Website", command=visitLink,
                     fg="blue", bg="#FFFFFF")

    Button1.grid(row=0, column=1, columnspan=2, padx=10, pady=10)
    Button2.grid(row=1, column=1, padx=10, pady=10)
    Button3.grid(row=1, column=2, padx=10, pady=10)
    Button4.grid(row=2, column=1, padx=10, pady=10, columnspan=2)

    root.mainloop()
