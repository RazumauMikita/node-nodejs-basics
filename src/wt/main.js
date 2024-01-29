const { Worker, isMainThread } = require("node:worker_threads");
const os = require("os");
const path = require("path");

const performCalculations = async () => {
  if (isMainThread) {
    const workerThreads = [];
    const cpuCores = os.cpus().length;
    for (let i = 0; i < cpuCores; i += 1) {
      workerThreads.push(
        new Promise((res, rej) => {
          const data = i + 10;
          const worker = new Worker(path.join(__dirname, "worker.js"), {
            workerData: data,
          });
          worker.on("error", rej);
          worker.on("message", res);
        })
      );
    }
    const results = await Promise.allSettled(workerThreads);
    const formattedResults = [];

    results.forEach((result) => {
      const status = result.status === "fulfilled" ? "resolved" : "error";
      const data = result.value ? result.value : null;
      formattedResults.push({
        status: status,
        data: data,
      });
    });
    console.log(formattedResults);
  }
};

performCalculations();
