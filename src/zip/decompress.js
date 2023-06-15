import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPathCurrent } from "../helpers/index.js";

const decompress = async () => {
  const pathNewFile = getPathCurrent(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const pathGzip = getPathCurrent(import.meta.url, "files", "archive.gz");
  const readFile = createReadStream(pathGzip);
  const unzipFile = createUnzip();
  const writeFile = createWriteStream(pathNewFile);

  pipeline(readFile, unzipFile, writeFile);
};

await decompress();
