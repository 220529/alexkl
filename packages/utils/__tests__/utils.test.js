"use strict";

const { say } = require("..");
const assert = require("assert").strict;

assert.strictEqual(say(), "Hello from utils!");
console.info("utils tests passed");
