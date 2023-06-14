import { rename as renamed } from "node:fs/promises";
import { getPathCurrent, triggerErrorFs } from "../helpers/index.js";

const rename = async () => {
  const pathOldFile = getPathCurrent(
    import.meta.url,
    "files",
    "wrongFilename.txt"
  );
  const pathNewFile = getPathCurrent(
    import.meta.url,
    "files",
    "properFilename.md"
  );
  try {
    renamed(pathOldFile, pathNewFile).catch((err) => triggerErrorFs(err));
  } catch (err) {
    console.error(err);
  }
};

await rename();
