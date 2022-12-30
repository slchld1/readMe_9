// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { resolveObjectURL } = require('buffer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the desired Project Title:',
        validate: function (output) {
            if(output.length === 0) {
                return console.log('Title is required.')
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the Description of the Project:',
        validate: function (output) {
            if (output.length === 0){
                return console.log("Description is required.")

            }else {
                return true
            }
        }
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
        validate: function (output) {
            if (output.length === 0){
                return console.log('Email is required.')
            }else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the name of your GitHub repo:',
        validate: function (output) {
            if (output === 0) {
                return console.log('GitHub repo is required.')
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests written:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose your License:',
        choices: ['MIT', 'ISC', 'Mozilla Public License 2.0', 'Unlicensed'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile('README.md', data, error => {
            if (error){
                return console.log(error);
            }else{
                console.log("Success!");
            }
        });
}

// const createFile = utils.promisify(writeToFile)
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = MarkDown.generateReadMe(data)
        writeToFile(`README.md`, mark)
        return data;
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
