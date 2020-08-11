const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const util = require("util");
// const generateMarkdown = require('./utils/generateMarkdown');

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
            name: "installation",
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
            name: "tests",
            message: "Provide tests on project.",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your contact information?",
            name: "contact"
        }

    ]);
}
function generateREADME(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>README</title>
    </head>
    <body>
        <h3 id="title">TITLE</h3>
        <h3> Unit 09 Node.js and ES6+ Homework: Good REAME generator</h3>
        <p> ${answers.title}
        </p>
        <h3 id="desc">DESCRIPTION </h3>
        <p>${answers.description}</p>
        <h3>TABLE OF CONTENTS</h3>
            <ul>
               <li><a href="#title">Title</a></li> 
              <li><a href="#desc">Description</a></li>  
                <li><a href="#install">Installation</a></li>
                <li><a href="#use">Usage</a></li>
                <li><a href="#lic">License</a></li>
                <li><a href="#cont">Contributors</a></li>
                <li><a href="#tests">Tests</a></li>
                <li><a href="#questions">Questions</a></li>
            </ul>
        <h3 id="install">INSTALLATION</h3>
        <p>${answers.installation}</p>
        <h3 id="use">USAGE</h3>
        <p>${answers.usage}</p>
        <h3 id="lic">LICENSE</h3>
        <p>${answers.license} <a href=""></a> </p>
        <h3 id="cont">CONTRIBUTING</h3>
        <p>Contributors to this project include: ${answers.name} </p>
        <h3 id="tests">TESTS</h3>
        <p>${answers.tests}</p>
        <h3 id="questions">QUESTIONS/CONTACT</h3>
        <p>If you have questions about this project, or would like to contribute, please contact <br>
        the developer, ${answers.name} at: <a href="${answers.contact}"></a></p>> 
    </body>
    </html>;`
}
async function init() {
    try {
        const answers = await promptUser();
        const readMe = generateREADME(answers);
        await writeFileAsync('README.md', readMe);
        console.log('Successfully written to README.md');
    } catch (err) {
        console.log(err);
    };
};

// function call to initialize program
init();
