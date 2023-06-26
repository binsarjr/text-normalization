import {
    Normalizer
} from "./Normalizer.js"
import {
    Slangword
} from "./SlangWord.js"
import {
    Stopword
} from "./Stopword.js"

export const encode = (text) => {
    const stopword = new Stopword()
    const slangWord = new Slangword()

    text = Normalizer.cleanUrlFromText(text)


    // kenapa replacement slangword 2x?
    // bisa saja ada slang word yang memiliki karakter duplikat
    // contohnya 'nggak' => 'tidak'
    text = slangWord.replaceSlangwords(text)

    text = Normalizer.normalize(text)

    text = slangWord.replaceSlangwords(text)
    text = stopword.stopword(text)

    return text
}