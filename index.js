// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
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
        name: 'contributing',
        message: 'Please enter who is Contributing to this Project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests written:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License:',
        choices: ['MIT', 'ISC', 'GPL', 'Apache', 'Unlicensed'],
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
        name: 'user',
        message: 'Please enter the name of your GitHub username',
        validate: function (output) {
            if (output === 0) {
                return console.log('GitHub username is required.')
            }else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please enter the name of your GitHub repository:',
        validate: function (output) {
            if (output === 0) {
                return console.log('GitHub repository name is required.')
            } else {
                return true;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile('./Develop/README.md', data, error => {
            if (error){
                return console.log(error);
            }else{
                console.log("Success!");
            }
        });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = generateMarkdown(data)
        writeToFile(`README.md`, mark)
        return data;
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
