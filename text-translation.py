from translate import Translator


def translateToEnglish(text):
    translated = Translator(to_lang="hindi")
    string_translated = translated.translate(text)
    return string_translated
