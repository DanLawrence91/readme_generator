// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your project',
        default: 'npm i (project name)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license. Leave blank and press enter if no license chosen',
        choices: ['MIT', 'ISC', 'GNU General Public License v3', 'Apache 2.0', 'Other', 'No license'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please give guidelines on how to contribute to this project',
        default: 'Contributions are welcome via pull requests. If anything major is to be proposed, please open an issue first to discuss what you would like to change.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please explain how to run any necessary tests',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Pleaase provide your GitHub username',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions)
        .then((data) => fs.writeFileSync('README.md', readme.generateMarkdown(data)))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
        .then (() => console.log('README creation successful'))
        .catch ((err) => console.error(err))
}

// Function call to initialize app
init(); 
