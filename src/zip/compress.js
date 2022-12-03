import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileSource = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileDestination = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const readStream = createReadStream(fileSource);
  const writeStream = createWriteStream(fileDestination);

  pipeline(
    readStream, 
    gzip, 
    writeStream, 
    (err) => {
      if (err) {
        console.log('An error occurred:', err);
      }
    }
  );
};

await compress();