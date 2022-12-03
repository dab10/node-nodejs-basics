import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().trim().split('').reverse().join('') + '\n');
    }
  })

  pipeline(
    process.stdin,
    transform,
    process.stdout,
    err => {
      console.log(`Error: ${err}`);
    }
  )
};

await transform();