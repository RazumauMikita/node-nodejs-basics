/** @format */
const { env } = require("node:process");

const envPrefix = "RSS_";

const parseEnv = () => {
  let result = "";
  for (let e in env) {
    const isRSSenv = e.indexOf(envPrefix) === 0;
    if (isRSSenv) {
      result += `${e}=${env[e]}; `;
    }
  }
  console.log(result);
};

parseEnv();
