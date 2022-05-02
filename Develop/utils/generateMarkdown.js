const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = '';
  if(license === 'MIT') {
    link ='https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache') {
    link = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL') {
    link = 'jttps://www.gnu.org/licenses'
  } else {
    link = ""
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


          ## ${renderLicenseSection(data.license)} 
          ## ${renderLicenseBadge(data.license)}
          ### ${renderLicenseLink(data.license)}


          ## Table of Contents:
          ### * [Installation](#installation)
          ### * [License](#license)
          ### * [Contributors](#contributors)
          ### * [Usage](#usage)
          ### * [Tests](#tests)
          

          ## Installation:
          ### Install these for this project to make this app work:
          ### ${data.installation}

          ## Usage:
          ### ${data.usage}

          ## Contributors:
          ### ${data.contributors}


          ## Questions:
          ### You can reach me here if you have any questions
          ### Github: https://github.com/${data.questions}
          ### or
          ### Email: ${data.email}

          
`;
}
// export
module.exports = generateMarkdown;