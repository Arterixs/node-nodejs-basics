import { readdir } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const list = async () => {
  const pathMcdir = getPathCurrent(import.meta.url, 'files');
  try {
    const listFiles = await readdir(pathMcdir).catch((error) =>
      triggerErrorFs(error)
    );
    console.log(listFiles);
  } catch (err) {
    console.error(err);
  }
};

await list();
