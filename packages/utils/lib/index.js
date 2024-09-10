const sum = require("./sum");

function say() {
  return "Hello from utils!";
}

console.log("this is utils");

module.exports = { say, sum };
