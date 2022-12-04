import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const files = await readdir(path.join(__dirname, 'files'));
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();