const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const util = require("util");
const generate = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
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
        },
        {
            type: "input",
            message: "What are your installation requirements?",
            name: "install"
        },
        {
            type: "input",
            message: "Explain how your project will be used.",
            name: "usage"
        },
        {
            type: "list",
            message: "What license would you like on your project?",
            name: "license",
            choices: ['MIT', 'GPL', 'Apache']
        },
        {
            type: "input",
            message: "Who are the contributors to this project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide tests on project.",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your contact information?",
            name: "contact"
        }
    ]).then(response => {
         return response
        // async  (resoponse) => {
        //     await fs.writeFileAsync("")
          
        });

}
// function to write README file
// function writeToFile(fileName, data) {

// }

// function to initialize program
async function init() {
    try {
        const answers = await promptUser(); 
    
        const txt = generate(answers);
        await writeFileAsync("README.md", txt);
    } catch (err) {
        console.log(err);
    }
}


// function call to initialize program
init();
