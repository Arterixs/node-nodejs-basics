import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { getPathCurrent } from "../helpers/index.js";

const DEFAULT_NUMBER = 10;

const performCalculations = async () => {
  const amountCoreHostMachine = cpus().length;
  const pathWorkerFile = getPathCurrent(import.meta.url, "worker.js");
  const arrPromisesWorker = [];
  for (let i = 0; i < amountCoreHostMachine; i += 1) {
    const promiseWorker = new Promise((resolve, reject) => {
      const worker = new Worker(pathWorkerFile, {
        workerData: DEFAULT_NUMBER + i,
      });
      worker.on("message", (value) => resolve(value));
      worker.on("messageerror", () => reject());
      worker.on("error", () => reject());
    });
    arrPromisesWorker.push(promiseWorker);
  }

  Promise.allSettled(arrPromisesWorker)
    .then((result) => {
      const updateResult = result.map((item) => {
        if (item.status === "fulfilled") {
          return { status: "resolved", data: item.value };
        }
        return { status: "error", data: null };
      });
      return updateResult;
    })
    .then((newResult) => console.log(newResult));
};

await performCalculations();
