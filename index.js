import brain from 'brain.js'
import {
    encode,
    serialize
} from './src/serializer.js'

const net = new brain.NeuralNetwork({
    activation: 'relu',
    log: true,
})

net.train(serialize([{
    input: 'terima kasih',
    output: {
        terimakasih: 1
    }
}]))


let output = net.run(encode('terima kasih'))
console.log(output)