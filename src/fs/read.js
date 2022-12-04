import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const file = await readFile(path.join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' });
    console.log(file);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();