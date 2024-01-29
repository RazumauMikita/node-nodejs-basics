const fs = require("fs");
const path = require("path");

const WRONG_FILE_NAME = "wrongFilename.txt";
const PROPER_FILE_NAME = "properFilename.md";
const FOLDER_NAME = "files";
const ERROR_TEXT = "FS operation failed";

const rename = async () => {
  fs.rename(
    path.join(__dirname, FOLDER_NAME, WRONG_FILE_NAME),
    path.join(__dirname, FOLDER_NAME, PROPER_FILE_NAME),
    (err) => {
      if (err) throw new Error(ERROR_TEXT);
    }
  );
};

rename();
