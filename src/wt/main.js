import { Worker } from "node:worker_threads";
import { availableParallelism } from "node:os";
import { getPathCurrent } from "../helpers/index.js";

const DEFAULT_NUMBER = 10;

const performCalculations = async () => {
  const amountCoreHostMachine = availableParallelism();
  const pathWorkerFile = getPathCurrent(import.meta.url, "worker.js");
  const arrPromisesWorker = [];
  for (let i = 0; i < amountCoreHostMachine; i += 1) {
    const promiseWorker = new Promise((resolve, reject) => {
      const paramsWorker = DEFAULT_NUMBER + i;
      const worker = new Worker(pathWorkerFile, {
        workerData: paramsWorker,
      });
      worker.on("message", (value) => resolve(value));
      worker.on("messageerror", () => reject(null));
      worker.on("error", () => reject(null));
    });
    arrPromisesWorker.push(promiseWorker);
  }

  Promise.allSettled(arrPromisesWorker)
    .then((result) => {
      const updateResult = result.map((item) => {
        if (item.status === "fulfilled") {
          return { status: "resolved", data: item.value };
        }
        return { status: "error", data: item.value };
      });
      return updateResult;
    })
    .then((newResult) => console.log(newResult));
};

await performCalculations();
