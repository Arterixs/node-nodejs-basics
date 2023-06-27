import { readFile } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const read = async () => {
  const pathReadFile = getPathCurrent(
    import.meta.url,
    'files',
    'fileToRead.txt'
  );
  try {
    await readFile(pathReadFile, 'UTF-8')
      .then((result) => console.log(result))
      .catch((err) => triggerErrorFs(err));
  } catch (err) {
    console.error(err);
  }
};

await read();
