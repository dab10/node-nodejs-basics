import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    await rm(path.join(__dirname, 'files', 'fileToRemove.txt'));
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await remove();