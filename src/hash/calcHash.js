import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const { createHash } = await import('node:crypto');
const hash = createHash('sha256');

const calculateHash = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const content = await readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = createHash('sha256');
  
    hash.update(content);
    console.log(hash.digest('hex'));
  } catch (err) {
    throw err;
  }
};

await calculateHash();