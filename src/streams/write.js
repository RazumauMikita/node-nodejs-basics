const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const FILE_NAME = "fileToWrite.txt";
const FOLDER_NAME = "files";

const input = process.stdin;
const out = fs.createWriteStream(path.join(__dirname, FOLDER_NAME, FILE_NAME));

const write = async () => {
  pipeline(input, out, (err) => err);
};

write();
