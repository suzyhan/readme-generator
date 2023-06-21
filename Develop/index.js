// TODO: Include packages needed for this application
var inquirer = require('inquirer');

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
        type: "input",
        name: "screenshot",
        message: "To add a screenshot, provide the relative filepath of the image to be used."
    },
    {
        type: "input",
        name: "link",
        message: "What is the URL of your deployed application?"
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
        name: "user",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("There is an error.");
    } else {
      // Something else went wrong
      console.log("There is an error.");
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
