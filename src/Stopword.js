import fs from 'fs'
import {
    rootPath
} from './utils.js'

export class Stopword {
    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;

        this.stopwords = [];
        this.addStopwordFromFile(rootPath('datasets', 'id', 'stopword.txt'))

    }

    /**
     * Menambahkan stopwords dari file yang ditentukan.
     * @param filepath path dari file yang berisi stopwords.
     */
    addStopwordFromFile(filepath) {
        fs.readFileSync(filepath).toString().split(/\n\r?/).map(stopword => {
            if (!this.stopwords.includes(stopword)) this.stopwords.push(stopword)
        })
    }

    addStopword(word) {
        // Mengubah kata menjadi lowercase dan menambahkannya ke array stopwords
        this.stopwords.push(word.toLowerCase());
    }

    stopword(text) {
        // Tokenisasi teks menjadi array kata-kata
        const words = text.split(/\s+/);

        // Menghapus kata-kata yang merupakan stop words
        const filteredWords = words.filter(word => {
            const loweringWord = word.toLowerCase();
            return !this.stopwords.includes(loweringWord);
        });

        // Menggabungkan kembali kata-kata yang tersisa menjadi teks yang sudah difilter
        const filteredText = filteredWords.join(' ');

        return filteredText;
    }
}