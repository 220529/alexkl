#!/usr/bin/env node

const { sum, say } = require("@alexkl/utils");

function core() {
  return "Hello from core";
}

console.log("core...14", say(), sum(1, 2));

module.exports = core;
