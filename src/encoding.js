import {
    Normalizer
} from "./Normalizer.js"
import {
    Slangword
} from "./SlangWord.js"
import {
    Stopword
} from "./Stopword.js"
import {
    Stemmer,
    Tokenizer
} from 'sastrawijs'

export const sastrawiStemmer = (sentence) => {
    let stemmed = [];
    let stemmer = new Stemmer();
    let tokenizer = new Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (let word of words) {
        stemmed.push(stemmer.stem(word));
    }
    return stemmed.join(' ');
}

export const encode = (text) => {
    const stopword = new Stopword()
    const slangWord = new Slangword()

    text = Normalizer.cleanUrlFromText(text)


    // kenapa replacement slangword 2x?
    // bisa saja ada slang word yang memiliki karakter duplikat
    // contohnya 'nggak' => 'tidak'
    text = slangWord.replaceSlangwords(text)

    text = Normalizer.normalize(text)

    text = sastrawiStemmer(text)

    text = slangWord.replaceSlangwords(text)
    text = stopword.stopword(text)

    return text
}