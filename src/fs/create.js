import { writeFile } from "node:fs/promises";
import { getPathCurrent } from "../helpers/index.js";

const create = async () => {
  const path = getPathCurrent(import.meta.url, "files", "fresh.txt");
  writeFile(path, "I am fresh and young", { flag: "wx" }).catch((err) => {
    err.message = "FS operation failed";
    console.log(err);
    throw new Error(err);
  });
};

await create();
