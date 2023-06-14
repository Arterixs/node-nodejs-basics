import { readdir } from "node:fs/promises";
import { getPathCurrent, triggerErrorFs } from "../helpers/index.js";

const list = async () => {
  const pathMcdir = getPathCurrent(import.meta.url, "files");
  try {
    readdir(pathMcdir)
      .then((result) => console.log(result))
      .catch((error) => triggerErrorFs(error));
  } catch (err) {
    console.error(err);
  }
};

await list();
