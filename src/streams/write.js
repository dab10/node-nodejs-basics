import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileForStream = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(fileForStream, 'utf-8');
  stdin.pipe(writeStream);
};

await write();