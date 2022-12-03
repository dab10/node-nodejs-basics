import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileForStream = path.join(__dirname, 'files', 'fileToRead.txt');

  const readStream = createReadStream(fileForStream, 'utf-8');
  
  let data = '';
  
  readStream.on('data', chunk => data += chunk);
  readStream.on('end', () => stdout.write(data));
  readStream.on('error', error => console.log('Error', error.message));
};

await read();