const fs = require("fs");
const path = require("path");

const FOLDER_NAME = "files";
const ERROR_TEXT = "FS operation failed";

const list = async () => {
  fs.readdir(path.join(__dirname, FOLDER_NAME), (err, files) => {
    if (err) throw new Error(ERROR_TEXT);
    console.log(files);
  });
};

list();
