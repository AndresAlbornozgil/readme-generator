// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: "What is your project's title?"
    },
    {
        name: 'description',
        message: "What is your project about?"
    },
    { 
        name: 'installation',
        message: "How do you install it?"
    },
    {
        name: 'usage',
        message: "How is this project used?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What is your project's license?",
        choices: ['none', 'MIT', 'Apache']
    },
    {
        name: 'contributing',
        message: "How to contribute to this project?"
    },
    {
        name: 'tests',
        message: "How is testing done in this project?"
    },
    {
        name: 'questions',
        message: "questions section?"
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
console.info('data:', data);
}

// TODO: Create a function to initialize app
function init() { 

inquirer
  .prompt(questions)
  .then(answers => {
    writeToFile('readmeResults.md', answers);
    
  });
}

// Function call to initialize app
init();
