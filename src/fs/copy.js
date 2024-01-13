/** @format */
const fs = require("fs");
const path = require("path");

const SRC_FILENAME = "files";
const COPY_FILENAME = "files_copy";
const ERROR_TEXT = "FS operation failed";

const copy = () => {
  fs.readdir(path.join(__dirname, SRC_FILENAME), (err, file) => {
    if (err) throw new Error(ERROR_TEXT);

    fs.mkdir(path.join(__dirname, COPY_FILENAME), (err) => {
      if (err) throw new Error(ERROR_TEXT);

      file.forEach((el) => {
        fs.copyFile(
          path.join(__dirname, SRC_FILENAME, el),
          path.join(__dirname, COPY_FILENAME, el),
          (err) => {
            if (err) throw err;
          }
        );
      });
    });
  });
};

copy();
