import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyFile, readdir, constants, mkdir } from 'node:fs/promises';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const files = await readdir(path.join(__dirname, 'files'));

    try {
      await mkdir(path.join(__dirname, 'files_copy'));
    } catch (err) {
      throw new Error('FS operation failed')
    }

    for (const file of files) {
      try {
        await copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file), constants.COPYFILE_EXCL);
      } catch {
        throw new Error('FS operation failed')
      } 
    }
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await copy();