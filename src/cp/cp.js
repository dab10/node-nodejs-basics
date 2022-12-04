import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileCP = path.join(__dirname, 'files', 'script.js');

  let argsChild;
  Array.isArray(args) ? argsChild = args : argsChild = args.split(' ')

  const child = spawn('node', [fileCP, ...argsChild]);

  stdin.on('data', (data) => child.stdin.write(data));

  child.stdout.on('data', (data) => stdout.write(data.toString()));
};

// Put your arguments in function call to test this functionality
spawnChildProcess([2, 3, 4]);