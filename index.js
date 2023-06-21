// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of the project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What is the title of your project?",
        choices: ["BSD", "MIT", "Apache2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contibution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples of tests if applicable."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README file has been created!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {
        console.log(answers);
        writeToFile("./dist/generatedREADME.md", generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
