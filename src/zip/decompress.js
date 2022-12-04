import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileDestination = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileSource = path.join(__dirname, 'files', 'archive.gz');

  const unZip = createUnzip();
  const readStream = createReadStream(fileSource);
  const writeStream = createWriteStream(fileDestination);

  pipeline(
    readStream, 
    unZip, 
    writeStream, 
    (err) => {
      if (err) {
        console.log('An error occurred:', err);
      }
    }
  );
};

await decompress();