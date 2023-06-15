import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { getPathCurrent, triggerErrorFs } from "../helpers/index.js";

const calculateHash = async () => {
  const pathHashFile = getPathCurrent(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );
  try {
    const text = await readFile(pathHashFile, "utf-8").catch((err) =>
      triggerErrorFs(err)
    );
    const hashText = createHash("sha256").update(text).digest("hex");
    console.log(hashText);
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
