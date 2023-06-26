export class Normalizer {
    static normalize(text) {
        // lowering normalize
        text = text.toLowerCase()
        text = this.deduplicatedText(text)
        text = this.enterNormalize(text)
        return this.cleanText(text)
    }
    /**
     * Mengubah semua pemiih belakang baris dari teks menjadi spasi.
     * @param text Teks yang ingin dinormalisasi.
     * @return Teks yang telah dinormalisasi.
     */
    static enterNormalize(text) {
        return text.replace(/\n\r?/g, ' ')
    }
    /**
     * Bersihkan teks dari karakter khusus, tanda baca, dan angka yang tidak
     * relevan.
     * @param text teks yang akan dibersihkan.
     * @return teks yang sudah dibersihkan.
     */
    static cleanText(text) {
        // Menghapus karakter khusus, tanda baca, dan angka yang tidak relevan
        const cleanedText = text.replace(/[^\w\s]/g, '');

        // Menghapus spasi berlebih
        const trimmedText = cleanedText.replace(/\s+/g, ' ').trim();

        return trimmedText;
    }

    /**
     * Menghilangkan karakter duplikat dalam string yang diberikan.
     * @param {string} teks String yang akan dihilangkan duplikatnya.
     * @return {string} String tanpa karakter duplikat.
     * 
     * Example:
     * maakasihhh => makasih
     */
    static deduplicatedText(text) {
        return text.replace(/(\w)\1+/gi, '$1')
    }

    /**
     * Bersihkan URL dari teks.
     *
     * @param {String} text - Teks yang ingin dibersihkan.
     * @return {String} Teks yang sudah dibersihkan dari URL.
     */
    static cleanUrlFromText(text) {
        // Ekspresi reguler untuk mencari URL dalam teks
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Menghapus URL dari teks
        const cleanedText = text.replace(urlRegex, '');

        return cleanedText;
    }

    /**
     * Menormalkan kata-kata yang diulang dalam teks.
     * @param text teks string yang akan dinormalisasi.
     * @return teks string yang dinormalisasi.
     * 
     * Example:
     * sama sama => sama
     */
    static normalizeRepeatedWords(text) {
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
}