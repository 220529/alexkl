#!/usr/bin/env node

const { program } = require("commander");
const { say, sum } = require("@alexkl/utils");
const pkg = require("../package.json");

const registerCommand = () => {
  program
    .name(Object.keys(pkg.bin)[0])
    .version(`v${pkg.version}`, "-v, --version")
    .option("-d, --debug", "开启调试模式", false);

  program
    .command("init [projectName]")
    .description("初始化项目")
    .action((options) => {
      console.log("init.options", options);
    });

  program
    .command("clean")
    .description("清空依赖")
    .option("-a --all", "清空全部", true)
    .action((options) => {
      console.log("clean.options", options);
    });

  program.command("utils").action((options) => {
    console.log("clean.options", options);
    console.log("utils", say(), sum(100, 200));
  });

  program.parse();
};

const core = () => {
  try {
    registerCommand();
  } catch (error) {
    console.error(error.message);
  }
};

core();

module.exports = core;
