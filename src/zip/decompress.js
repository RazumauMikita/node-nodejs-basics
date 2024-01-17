/** @format */
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");
const path = require("path");

const FILE_NAME = "archive.gz";
const DECOMPRESSED_FILE_NAME = "fileToCompress.txt";
const FOLDER_NAME = "files";

const decompress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, FOLDER_NAME, FILE_NAME)
  );
  const out = fs.createWriteStream(
    path.join(__dirname, FOLDER_NAME, DECOMPRESSED_FILE_NAME)
  );
  const unzip = zlib.createUnzip();

  pipeline(input, unzip, out, (err) => err);
};

decompress();
