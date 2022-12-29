// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const MarkDown = requirey('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the desired Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the Description of the Project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the Installation Process:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the Usage of this Project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter who is Contributing to this Project:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose your License:',
        choices: ['MIT', 'ISC', 'Others', 'Unknown'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
