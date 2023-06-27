import { dirname, sep } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { release, version } from "node:os";
import { createServer } from "node:http";
import "./files/c.js";

const requireEsm = createRequire(import.meta.url);
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = requireEsm("./files/a.json");
} else {
  unknownObject = requireEsm("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${_filename}`);
console.log(`Path to current directory is ${_dirname}`);

export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
