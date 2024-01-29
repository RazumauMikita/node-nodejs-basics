/** @format */

const fs = require("fs");
const { pipeline, Transform } = require("stream");

const input = process.stdin;
const out = process.stdout;

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, en, callback) {
      const chunkStringified = chunk.toString().trim();
      const reversedChunk = chunkStringified.split("").reverse().join("");
      callback(null, reversedChunk + "\n");
    },
  });
  pipeline(input, transformStream, out, (err) => {
    throw err;
  });
};

transform();
