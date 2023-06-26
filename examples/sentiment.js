import brain from "brain.js"
import {
    encode
} from "../src/encoding.js"
import {
    sentenceToObject
} from "./brainutils.js"


const net = new brain.NeuralNetwork({
    log: true,
})


const positif = [
    "Saya sangat senang dengan pelayanan yang diberikan oleh perusahaan ini.",
    "Film ini sungguh mengagumkan dan membuat saya terinspirasi.",
    "Restoran ini memiliki makanan yang lezat dan suasana yang menyenangkan.",
    "Saya sangat puas dengan kualitas produk yang saya beli.",
    "Tim sepak bola favorit saya memenangkan pertandingan dengan penampilan yang luar biasa.",
    "Saya sangat berterima kasih kepada teman saya yang telah membantu saya dalam kesulitan ini.",
    "Musik yang mereka mainkan di konser itu sangat menghibur dan memukau penonton.",
    "Pemandangan di pantai ini indah sekali dan membuat saya merasa tenang.",
    "Saya merasa bangga dengan prestasi akademik yang telah saya capai.",
    "Proyek ini berjalan dengan lancar dan tim kerja sangat profesional."
]
const negatif = [
    "Pelayanan yang diberikan oleh perusahaan ini sangat buruk.",
    "Film ini sangat mengecewakan dan tidak sesuai harapan.",
    "Makanan di restoran ini tidak enak dan suasana kurang menyenangkan.",
    "Saya kecewa dengan kualitas produk yang saya beli.",
    "Tim sepak bola favorit saya kalah dalam pertandingan dengan penampilan yang buruk.",
    "Saya sangat kecewa kepada teman saya yang tidak menepati janji dalam kesulitan ini.",
    "Musik yang mereka mainkan di konser itu sangat tidak menghibur dan mengecewakan penonton.",
    "Pemandangan di pantai ini tidak indah dan membuat saya merasa tidak nyaman.",
    "Saya merasa frustrasi dengan prestasi akademik yang belum saya capai.",
    "Proyek ini mengalami banyak masalah dan tim kerja kurang profesional."
]

net.train([...positif.map(input => ({
    input: sentenceToObject(encode(input)),
    output: {
        positif: 1,
        negative: 0
    }
})), ...negatif.map(input => ({
    input: sentenceToObject(encode(input)),
    output: {
        positif: 0,
        negative: 1
    }
}))])







console.log(net.run(sentenceToObject(encode("pelayanannya buruk")))) // negative
console.log(net.run(sentenceToObject(encode("saya senang dengan pelayanan di restoran ini")))) // positif