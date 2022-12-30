// TODO: Create a function that returns a license badge based on which license is passed in
class MarkDown {
    static generateReadMe(output){
      return `
# ${output.title}
https://github.com/${output.user}/${output.repository}
      
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${output.user}/${output.repository}?style=flat&logo=appveyor)
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${output.user}/${output.repository}?style=flat&logo=appveyor)

## Table of Content
-[Project Description](#Description)
-[Usage](#Usage)
-[Installation](#Installation)
-[Contributing](#Contributing)
-[Tests](#Tests)
-[Questions](#Questions)
-[License](#License)

## Description
${output.description}

## Usage
${output.usage}

## Installation
${output.installation}

## Contributing
${output.contributing}

## Tests
${output.tests}

## Questions
${output.email}
${output.user}

## License
${output.license}`
    }

}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {}

module.exports = MarkDown;
