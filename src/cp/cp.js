/** @format */

const { spawn } = require("child_process");
const path = require("path");

const FOLDER_NAME = "files";
const FILE_NAME = "script.js";
const PATH = path.join(__dirname, FOLDER_NAME, FILE_NAME);

const spawnChildProcess = async (args) => {
  const child = spawn("node", [PATH, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1, arg2", "arg3"]);
