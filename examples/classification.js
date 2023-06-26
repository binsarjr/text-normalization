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
})


net.train([{
        input: sentenceToObject(encode('terimakasih')),
        output: {
            thank: 1,
            id: 1
        }
    }, {
        input: sentenceToObject(encode('terima kasih')),
        output: {
            thank: 1,
            id: 1
        }
    },
    {
        input: sentenceToObject(encode('terima kasih banyak')),
        output: {
            thank: 1,
            id: 1
        }
    },
    {
        input: sentenceToObject(encode('tidak,terima kasih')),
        output: {
            thank: 0,
            id: 1
        }
    },
    {
        input: sentenceToObject(encode('terima kasih tapi boong')),
        output: {
            thank: 0,
            id: 1
        }
    },
    {
        input: sentenceToObject(encode("Masukkan kode otp")),
        output: {
            information: 1,
            id: 1
        }
    },
    {
        input: sentenceToObject(encode("informasi")),
        output: {
            information: 1,
            id: 1
        }
    }
])

const sentences = [
    "makasih mas",
    "terima kasih banyak mas",
    "makasih mas tapi boong",
    "tidak,terima kasih",
    `Hi YUDISTIRA ARYA MUTAMANG,

Berikut adalah OTP Anda: 278991 untuk melakukan verifikasi login ke AmikomOne.

Silahkan masukkan kode tersebut sebelum pukul 00:00:48 WIB.

Terima kasih,

Admin AmikomOne

Universitas Amikom Yogyakarta`,
    `Terimakasih anda telah mempercayakan kesehatan hewan kesayangan anda kepada Barokah Vet Service
Untuk segala informasi atau konsultasi, bisa melalui no ini,, Terimakasih
Semoga hewan kesayangan pawrent sehat selalu,,, 
Salam Barokah`
]

sentences.map(sentence => {
    const result = net.run(sentenceToObject(encode(sentence)))
    console.log(sentence)
    console.log(result, "lang:", getKeyOfMaxValue(result), ",clasify:", getKeyOfMaxValue(result, 1))
    console.log()
})