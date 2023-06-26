// Dalam lingkungan ESM
import {
    fileURLToPath
} from 'url';
import {
    dirname,
    join
} from 'path';

// Mendapatkan path dari file saat ini
const __filename = fileURLToPath(
    import.meta.url);

// Mendapatkan direktori dari file saat ini
const __dirname = dirname(__filename);

/**
 * root path
 * @param  {...string} path 
 * @returns 
 */
export const rootPath = (...path) => join(__dirname, '..', ...path)