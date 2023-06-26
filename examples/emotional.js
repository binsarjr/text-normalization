import brain from "brain.js"
import {
    encode
} from "../src/encoding.js"
import {
    getKeyOfMaxValue,
    sentenceToObject
} from "./brainutils.js"


const net = new brain.NeuralNetwork({
    log: true,
    hiddenLayers: [12, 12]
})


// butuh normalizer dan datasheet sendiri supaya lebih optimal hasilnya


net.train([
    // bahagia
    ...[
        "Hari ini adalah hari yang indah!",
        "Saya sangat senang dengan hasil yang saya capai.",
        "Acara ulang tahun ini begitu menyenangkan!"
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            bahagia: 1,
        }
    })),
    // sedih
    ...[
        "Saya merasa sedih setelah mendengar berita itu.",
        "Kehilangan seseorang yang kita cintai sangat menyakitkan.",
        "Mendengar lagu ini selalu membuat saya teringat kenangan yang sedih."
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            sedih: 1
        }
    })),
    // marah
    ...[
        "Aku sangat marah dengan perlakuan mereka terhadapku.",
        "Bagaimana mereka bisa melakukan hal itu? Ini tidak adil!",
        "Rasa marah dalam diriku semakin memuncak."
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            marah: 1
        }
    })),
    // Takut
    ...[
        "Aku takut dengan suara gemuruh petir di malam hari.",
        "Berjalan sendirian di tempat yang gelap membuatku merasa takut.",
        "Saya merasa cemas dan takut menghadapi presentasi besar besok."
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            takut: 1
        }
    })),
    // cemas
    ...[
        "Aku sangat cemas tentang hasil tes ini.",
        "Menghadapi wawancara kerja membuatku merasa cemas.",
        "Pikiran negatif selalu membuatku merasa cemas dan khawatir."
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            cemas: 1
        }
    })),
    // jijik
    ...[
        "Aku merasa jijik melihat makanan yang sudah basi.",
        "Bau di dalam kamar mandi membuatku merasa jijik.",
        "Aku tidak suka dengan tekstur makanan ini, membuatku jijik."
    ].map(input => ({
        input: sentenceToObject(encode(input)),
        output: {
            jijik: 1
        }
    }))
])





const tasks = [
    "aku tidak suka makanan ini, membuat jijik",
    "hari yang indah",
    "aku takut petir",
    "aku merasa cemas hari ini",
    "aku mendengar berita sedih hari ini",
    "aku marah sekali kali ini",
]

tasks.map((text) => {
    const result = net.run(sentenceToObject(encode(text)))
    console.log(result, "Emosinya:", getKeyOfMaxValue(result))
})