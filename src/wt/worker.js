const { workerData, parentPort } = require("node:worker_threads");

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  let result;
  try {
    result = nthFibonacci(workerData);
  } catch {
    result = null;
  } finally {
    parentPort.postMessage(result);
  }
};

sendResult();
