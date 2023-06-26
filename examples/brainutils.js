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
export function getKeyOfMaxValue(obj) {
    let maxKey = null;
    let maxValue = -Infinity;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] > maxValue) {
                maxValue = obj[key];
                maxKey = key;
            }
        }
    }

    return maxKey;
}