import { rm } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const remove = async () => {
  const pathDeleteFile = getPathCurrent(
    import.meta.url,
    'files',
    'fileToRemove.txt'
  );
  try {
    await rm(pathDeleteFile).catch((err) => triggerErrorFs(err));
  } catch (err) {
    console.error(err);
  }
};

await remove();
