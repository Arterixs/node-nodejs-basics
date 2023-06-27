import { fork } from "node:child_process";
import { getPathCurrent } from "../helpers/index.js";

const spawnChildProcess = async (args) => {
  fork(getPathCurrent(import.meta.url, "files", "script.js"), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Вася", "Петя", "Анатолий"]);
