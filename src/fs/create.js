import { writeFile } from "node:fs/promises";
import { getPathCurrent } from "../helpers/index.js";

const create = async () => {
  const path = getPathCurrent(import.meta.url, "files", "fresh.txt");
  try {
    writeFile(path, "I am fresh and young", { flag: "wx" }).catch((err) => {
      err.message = "FS operation failed";
      throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

await create();
