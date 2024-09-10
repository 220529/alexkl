#!/usr/bin/env node

const { sum, say } = require("@alexkl/utils");

function core() {
  return "Hello from core";
}

console.log("this is core", say(), sum(1, 2));

module.exports = core;
