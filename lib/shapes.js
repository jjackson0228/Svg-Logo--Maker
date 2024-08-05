const inquirer = require("inquirer");
const fs = require("fs");

class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  generateSVG() {
    let shapesSVG = "";
  }
}
