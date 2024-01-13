/** @format */

const { argv } = require("node:process");

const flag = "--";

const parseArgs = () => {
  const argsArray = argv.slice(2);
  let result = "";

  argsArray.forEach((el, index, array) => {
    const flagIndex = el.indexOf(flag);

    if (flagIndex === 0) {
      result += `${el.slice(2)} is ${array[index + 1]}, `;
    }
  });
  console.log(result);
};

parseArgs();
