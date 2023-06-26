export function sentenceToObject(sentence) {
    const words = sentence.toString().toLowerCase().split(/\s+/);
    const object = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word !== '') {
            object[word] = 1;
        }
    }

    return object;
}

export function getKeyOfMaxValue(obj, level = 0, minimumRate = 0.8) {
    const sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    const value = sortedKeys[level];

    return obj[value] >= minimumRate ? value : undefined
}