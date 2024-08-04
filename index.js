const fs = require("fs");
const inquirer = require("inquirer");
const shape = require("./lib/shapes.js");

const shapes = new shape();

shapes.run();
