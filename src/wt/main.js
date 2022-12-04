import { Worker } from 'worker_threads'
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus } from 'os';

const performCalculations = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathToWorker = path.join(__dirname, 'worker.js');
  const arrPromises = [];

  for (let i = 0; i < cpus().length; i++) {
    arrPromises.push(
      new Promise((res, rej) => {
        const worker = new Worker(pathToWorker, { workerData: 10 + i });
        worker.on('message', (msg) => res(msg));
        worker.on('error', (msg) => rej(msg));
      })
    )
  }

  const resultPromises = await Promise.allSettled(arrPromises);

  const res = resultPromises.map((item) => ({
    status: item.status === 'fulfilled' ? 'resolved' : 'error',
    data: item.status === 'fulfilled' ? item.value : null
  }))

  console.log(res);

  return res;
};

await performCalculations();