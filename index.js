const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    }
    // {
    //     type: "input",
    //     message: "What is your Table of Contents?",
    //     name: "tableOfContents"
    // },
    // {
    //     type: "input",
    //     message: "What are the installation instructions for your project?",
    //     name: "installation"
    // },
    // {
    //     type: "input",
    //     message: "Explain how your project will be used.",
    //     name: "usage"
    // },
    // {
    //     type: "list",
    //     message: "What license would you like on your project?",
    //     name: "license",
    //     choices: ['MIT', 'GPL', 'Apache']
    // },
    // {
    //     type: "input",
    //     message: "Who are the contributors to this project?",
    //     name: "contributors"
    // },
    // {
    //     type: "input",
    //     message: "How do you test this project?",
    //     name: "tests"
    // },
    // {
    //     type: "input",
    //     message: "What is your contact information?",
    //     name: "contact"
    // }

]).then(data => {
    const queryUrl = `https://api.github.com/users/${data.username}`;
    axios.get(queryUrl).then(function(res) {
        const githubInfo = {
             name: res.data.name,
             profile: res.data.html_url
        };
    }); console.log('data', data);
});

// function to write README file
const writeToFile = (fileName, data) => {
    writeFileAsync('README' + '.md', generateMarkdown(data, githubInfo), error =>
    error ? console.error(error) : console.log(`${'README' + '.md'} generateMarkdown`))  
}; 

// function to initialize program
function init() {

}

// function call to initialize program
init();
