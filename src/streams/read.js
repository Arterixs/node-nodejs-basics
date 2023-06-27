import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { getPathCurrent } from '../helpers/index.js';

const read = async () => {
  const pathReadFile = getPathCurrent(
    import.meta.url,
    'files',
    'fileToRead.txt'
  );
  const readFile = createReadStream(pathReadFile);
  readFile.on('data', function (chunk) {
    stdout.write(chunk);
  });
};

await read();
