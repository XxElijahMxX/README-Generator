// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What are you calling your project?',
        response: titleResponse => {
            if (titleResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        response: nameResponse => {
            if (nameResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
        response: descResponse => {
            if (descResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        input: 'input',
        name: 'usage',
        message: 'Why would you use this?',
        response: usageResponse => {
            if (usageResponse) {
                return true;
            }else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        response: emailResponse => {
            if (emailResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would a user install this?',
        response: installResponse => {
            if (installResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does this project use?',
        choices: ['None', 'GPL', 'MIT', 'Apache'],
        response: licenseResponse => {
            if (licenseResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can others contribute?',
        response: contResponse => {
            if (contResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps to test this project?',
        response: testResponse => {
            if (testResponse) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = fileData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                validate: true
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        let fileData = generateMarkdown(answer);
    });
}

// Function call to initialize app
init();
