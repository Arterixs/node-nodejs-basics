import { mkdir, readdir, copyFile } from "node:fs/promises";
import { getPathCurrent, triggerErrorFs } from "../helpers/index.js";

const copy = async () => {
  const pathCopyMcdir = getPathCurrent(import.meta.url, "files_copy");
  const pathOriginMcdir = getPathCurrent(import.meta.url, "files");
  try {
    const files = await readdir(pathOriginMcdir).catch((error) =>
      triggerErrorFs(error)
    );
    await mkdir(pathCopyMcdir, { recursive: false }).catch((error) =>
      triggerErrorFs(error)
    );
    files.forEach(async (item) => {
      if (item.includes(".")) {
        await copyFile(
          `${pathOriginMcdir}/${item}`,
          `${pathCopyMcdir}/${item}`
        );
      }
    });
  } catch (error) {
    console.error(error);
  }
};

await copy();
