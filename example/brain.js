import brain from "brain.js"
import {
    encode
} from "../src/encoding.js"

function sentenceToObject(sentence) {
    const words = sentence.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, ' ').split(/\s+/);
    const object = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word !== '') {
            object[word] = 1;
        }
    }

    return object;
}



const net = new brain.NeuralNetwork({
    log: true,
})


net.train([{
        input: sentenceToObject(encode('terimakasih')),
        output: {
            thank: 1
        }
    }, {
        input: sentenceToObject(encode('terima kasih')),
        output: {
            thank: 1
        }
    },
    {
        input: sentenceToObject(encode('terima kasih banyak')),
        output: {
            thank: 1
        }
    },
    {
        input: sentenceToObject(encode('tidak,terima kasih')),
        output: {
            thank: 0
        }
    },
    {
        input: sentenceToObject(encode('terima kasih tapi boong')),
        output: {
            thank: 0
        }
    },
    {
        input: sentenceToObject(encode("Masukkan kode otp")),
        output: {
            information: 1
        }
    },
    {
        input: sentenceToObject(encode("informasi")),
        output: {
            information: 1
        }
    }
])


console.log(net.run(sentenceToObject(encode("makasih mas"))))
console.log(net.run(sentenceToObject(encode("makasih mas tapi boong"))))
console.log(net.run(sentenceToObject(encode("tidak,terima kasih"))))
console.log(net.run(sentenceToObject(encode(`Hi YUDISTIRA ARYA MUTAMANG,

Berikut adalah OTP Anda: 278991 untuk melakukan verifikasi login ke AmikomOne.

Silahkan masukkan kode tersebut sebelum pukul 00:00:48 WIB.

Terima kasih,

Admin AmikomOne

Universitas Amikom Yogyakarta`))))
console.log(net.run(sentenceToObject(encode(`Terimakasih anda telah mempercayakan kesehatan hewan kesayangan anda kepada Barokah Vet Service
Untuk segala informasi atau konsultasi, bisa melalui no ini,, Terimakasih
Semoga hewan kesayangan pawrent sehat selalu,,, 
Salam Barokah`))))