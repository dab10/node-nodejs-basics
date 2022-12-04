import * as path from 'path';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const data = new Uint8Array(Buffer.from('I am fresh and young'));
    const promise = writeFile(path.join(__dirname, 'files', 'fresh.txt'), data, { flag: 'wx' });

    await promise;
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await create();