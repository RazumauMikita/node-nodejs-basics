/** @format */

const fs = require("fs");
const path = require("path");

const FOLDER_NAME = "files";
const FILE_NAME = "fileToRead.txt";
const ERROR_TEXT = "FS operation failed";

const read = async () => {
  fs.readFile(
    path.join(__dirname, FOLDER_NAME, FILE_NAME),
    "utf-8",
    (err, data) => {
      if (err) throw new Error(ERROR_TEXT);
      console.log(data);
    }
  );
};

read();
