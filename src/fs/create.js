import { writeFile } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const create = async () => {
  const path = getPathCurrent(import.meta.url, 'files', 'fresh.txt');
  try {
    await writeFile(path, 'I am fresh and young', { flag: 'wx' }).catch(
      (error) => {
        triggerErrorFs(error);
      }
    );
  } catch (err) {
    console.error(err);
  }
};

await create();
