const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title or your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "list",
        message: "What is your Table of Contents?",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how your project will be used.",
        name: "usage"
    },
    {
        type: "input",
        message: "What license would you like on your project?",
        name: "license"
    },
    {
        type: "input",
        message: "Who are the contributors to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your contact information?",
        name: "contact"
    }

];

// function to write README file
function writeToFile(readMe, data) {


}

// function to initialize program
function init() {

}

// function call to initialize program
init();
