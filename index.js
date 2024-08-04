const fs = require("fs");
const inquirer = require("inquirer");
// Import necessary modules
const LogoMaker = require("./LogoMaker");

// Create an instance of LogoMaker
const logoMaker = new LogoMaker();

// Handle user input (text, text color, shape, shape color)
// You can use prompts or any other method to gather user input

// Generate SVG file based on user input
logoMaker.generateSVG();

// Print output
console.log("Generated logo.svg");
