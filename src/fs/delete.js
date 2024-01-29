const fs = require("fs");
const path = require("path");

const FILE_NAME = "fileToRemove.txt";
const FOLDER_NAME = "files";
const ERROR_TEXT = "FS operation failed";

const remove = async () => {
  fs.unlink(path.join(__dirname, FOLDER_NAME, FILE_NAME), (err) => {
    if (err) throw new Error(ERROR_TEXT);
  });
};

remove();
