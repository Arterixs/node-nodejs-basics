import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPathCurrent } from "../helpers/index.js";

const compress = async () => {
  const pathOldFile = getPathCurrent(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const pathGzip = getPathCurrent(import.meta.url, "files", "archive.gz");
  const readFile = createReadStream(pathOldFile);
  const zipFile = createGzip();
  const writeFile = createWriteStream(pathGzip);
  pipeline(readFile, zipFile, writeFile);
};

await compress();
