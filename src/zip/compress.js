/** @format */

const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");
const path = require("path");

const FILE_NAME = "fileToCompress.txt";
const COMPRESSED_FILE_NAME = "archive.gz";
const FOLDER_NAME = "files";

const compress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, FOLDER_NAME, FILE_NAME)
  );
  const out = fs.createWriteStream(
    path.join(__dirname, FOLDER_NAME, COMPRESSED_FILE_NAME)
  );
  const gzip = zlib.createGzip();
  pipeline(input, gzip, out, (err) => err);
};

compress();
