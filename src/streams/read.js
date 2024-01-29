const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const FILE_NAME = "fileToRead.txt";
const FOLDER_NAME = "files";

const out = process.stdout;
const input = fs.createReadStream(path.join(__dirname, FOLDER_NAME, FILE_NAME));

const read = () => {
  pipeline(input, out, (err) => err);
};

read();
