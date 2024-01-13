/** @format */
const path = require("path");
const { writeFile } = require("node:fs/promises");
const { open, close } = require("node:fs");

const FILE_NAME = "fresh.txt";
const FOLDER_NAME = "files";

const CONTENT_TEXT = "I am fresh and young";
const ERROR_TEXT = "FS operation failed";
const ERROR_CODE = "EEXIST";

const create = () => {
  const pathName = path.join(__dirname, FOLDER_NAME, FILE_NAME);

  open(pathName, "wx", async (err, fd) => {
    if (err && err.code === ERROR_CODE) {
      throw new Error(ERROR_TEXT);
    } else {
      try {
        await writeFile(pathName, CONTENT_TEXT, (err) => {
          if (err) throw err;
        });
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    }
  });
};

create();
