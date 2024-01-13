/** @format */

const fs = require("fs");
const path = require("path");

const FOLDER_NAME = "files";
const ERROR_TEXT = "FS operation failed";

const read = async () => {
  fs.readdir(path.join(__dirname, FOLDER_NAME), (err, files) => {
    if (err) throw new Error(ERROR_TEXT);
    files.forEach((file) => {
      fs.readFile(
        path.join(__dirname, FOLDER_NAME, file),
        "utf-8",
        (err, data) => {
          if (err) throw new Error(ERROR_TEXT);
          console.log(data);
        }
      );
    });
  });
};

read();
