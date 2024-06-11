// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project about?"
    },
    {
        type: 'input',
        name: 'content',
        message: ""
    },
    { 
        type: 'input',
        name: 'installation',
        message: "How do you install it?"
    },
    {
        type: 'input',
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
        type: 'input',
        name: 'contributing',
        message: "How to contribute to this project?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "How is testing done in this project?"
    },
    {
        type: 'input',
        name: 'questions',
        message: "Where can people reach out to you for questions?"
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
console.info('data:', data);
return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() { 
inquirer
  .prompt(questions)
  .then(answers => {
    writeToFile('readmeResults.md', generateMarkdown(answers));
    
  });
}

// Function call to initialize app
init();
