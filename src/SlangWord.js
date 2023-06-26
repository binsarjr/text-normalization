import {
    rootPath
} from "./utils.js"
import fs from 'fs'

export class Slangword {
    /**
     * Constructor for Slangword class.
     * Initializes an empty object to store slang words and their replacements.
     */
    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;


        this.slangwords = {};
        this.addSlangwordFromFile(rootPath('datasets', 'id', 'slangwords.csv'))
    }
    /**
     * Menambahkan slangwords dari file yang ditentukan.
     * @param filepath path dari file yang berisi slangwords.
     */
    addSlangwordFromFile(filepath) {
        fs.readFileSync(filepath).toString().split(/\n\r?/).map(line => {
            const [slang, replacement] = line.toLowerCase().split(',')
            if (slang === 'input' && replacement === 'output') return
            this.addSlangword(slang, replacement)
        })
    }

    /**
     * Add a slang word and its replacement to the Slangword object.
     * @param {string} slang - The slang word to be added.
     * @param {string} replacement - The replacement for the slang word.
     */
    addSlangword(slang, replacement) {
        this.slangwords[slang.toLowerCase()] = replacement;
    }

    /**
     * Replace slang words in the given text with their respective replacements.
     * @param {string} text - The text to be processed.
     * @returns {string} The text with slang words replaced by their replacements.
     */
    replaceSlangwords(text) {
        const words = text.split(' ');

        const replacedWords = words.map(word => {
            const normalizedWord = word.toLowerCase();
            if (this.slangwords.hasOwnProperty(normalizedWord)) {
                return this.slangwords[normalizedWord];
            }
            return word;
        });

        const replacedText = replacedWords.join(' ');

        return replacedText;
    }
}