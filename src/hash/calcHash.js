const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const FILE_NAME = "fileToCalculateHashFor.txt";
const FOLDER_NAME = "files";

const calculateHash = async () => {
  const readableStream = fs.createReadStream(
    path.join(__dirname, FOLDER_NAME, FILE_NAME)
  );
  readableStream.on("data", (chunk) => {
    const hashSum = crypto.createHash("sha256");
    hashSum.update(chunk);
    const hex = hashSum.digest("hex");
    console.log(hex);
  });
};
calculateHash();
