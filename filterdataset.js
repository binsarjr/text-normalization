import fs from 'fs'

const paths = ['./datasets/id/slangwords.csv', './datasets/id/stopword.txt']
paths.map(path => {
    let lines = fs.readFileSync(path).toString().split(/\n\r?/)

    let header = null
    if (path.endsWith('csv')) {
        header = lines[0]
        lines = lines.filter((_, i) => i != 0)
    }
    lines = [...new Set(lines)]
    lines.sort()
    if (header) {
        lines = [header, ...lines]
    }
    fs.writeFileSync(path, lines.join('\n'))
})