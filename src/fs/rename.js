import { rename as renamed, stat } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const rename = async () => {
  const pathOldFile = getPathCurrent(
    import.meta.url,
    'files',
    'wrongFilename.txt'
  );
  const pathNewFile = getPathCurrent(
    import.meta.url,
    'files',
    'properFilename.md'
  );
  const isOldFile = await stat(pathOldFile).catch(() => false);
  const isNewFile = await stat(pathNewFile).catch(() => false);

  try {
    if (isOldFile && isNewFile) throw Error('FS operation failed');
    await renamed(pathOldFile, pathNewFile).catch((err) => triggerErrorFs(err));
  } catch (err) {
    console.error(err);
  }
};

await rename();
