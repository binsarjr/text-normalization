import {
    encode
} from "./src/encoding.js"

const inputText = 'Ini adalah contoh teks yang akan dibersihkan dan difilter dari stopwords! nggk mas';

console.log(encode(inputText))

function normalizeRepeatedWords(text) {
    const words = text.split(' ');

    const normalizedWords = words.map((word, index) => {
        if (index < words.length - 1 && word === words[index + 1]) {
            // Kata saat ini sama dengan kata berikutnya
            return '';
        }
        return word;
    });

    const normalizedText = normalizedWords.filter(Boolean).join(' ');

    return normalizedText;
}

// Contoh penggunaan fungsi normalizeRepeatedWords
const inputText2 = 'malam malam ini aku pergi.';
const normalizedText = normalizeRepeatedWords(inputText2);

console.log('Teks yang Dinormalisasi:', normalizedText);