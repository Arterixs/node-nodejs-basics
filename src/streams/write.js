import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { getPathCurrent } from "../helpers/index.js";

const write = async () => {
  const pathWriteFile = getPathCurrent(
    import.meta.url,
    "files",
    "fileToWrite.txt"
  );
  const writeFile = createWriteStream(pathWriteFile);
  stdin.on("data", (data) => {
    writeFile.write(data);
  });
};

await write();
