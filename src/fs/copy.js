import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { getPathCurrent, triggerErrorFs } from '../helpers/index.js';

const copy = async () => {
  const pathCopyMcdir = getPathCurrent(import.meta.url, 'files_copy');
  const pathOriginMcdir = getPathCurrent(import.meta.url, 'files');
  try {
    const files = await readdir(pathOriginMcdir).catch((error) =>
      triggerErrorFs(error)
    );
    await mkdir(pathCopyMcdir, { recursive: false }).catch((error) =>
      triggerErrorFs(error)
    );
    for (const file of files) {
      if (file.includes('.')) {
        await copyFile(
          `${pathOriginMcdir}/${file}`,
          `${pathCopyMcdir}/${file}`
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
