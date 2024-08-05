const shape = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = new shape();

inquirer.prompt([
  {
    type: "input",
    message:
      "To start making your new logo enter up to 3 characters that you would like to be displayed:",
    name: "svgText",
  },
  {
    type: "input",
    message: "Next put in a color or hexadecimal number that equals a color:",
    name: "svgTextColor",
  },
  {
    type: "list",
    message: "Pick a shape for your logo:",
    name: "svgShape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    message: "Last enter the color or hexadecimal number for your shape:",
    name: "svgLogoColor",
  },
]);
shapes.run();
