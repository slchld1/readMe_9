// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(output) {
// Table of Content
let createTOC = `## Table of Contents`;

if (output.usage !== '') { createTOC += `
* [Usage](#usage)` };


if (output.installation !== '') { createTOC += `
* [Installation](#installation)` };


if (output.contributing !== '') { createTOC += `
* [Contributing](#contributing)` };

if (output.tests !== '') { createTOC += `
* [Tests](#tests)` };

// Markdown for readME
let markdown =
`
# ${output.title}
https://github.com/${output.user}/${output.repository}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${output.user}/${output.repository}?style=flat&logo=appveyor)
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${output.user}/${output.repository}?style=flat&logo=appveyor)
![badge](https://img.shields.io/badge/license-${output.license}-brightgreen)<br />
## Description
${output.description}\n`

markdown += createTOC;

// Usage Section
let usageMark = 
`
## Usage
${output.usage}\n`

if (output.usage !== ""){
  markdown += usageMark;
}

// Installation Section
let installMark = 
`   
## Installation
${output.installation}\n`

if (output.installation !== ""){
  markdown += installMark;
}

// Contributing Section
let contributingMark = 
`
## Contributing
${output.contributing}\n`

if (output.contributing !== ""){
  markdown += contributingMark;
}

// Test Section
let testMark = 
`
## Tests
${output.tests}\n`
if (output.tests !== ""){
  markdown += testMark;
}

// Questions Section
let questionMark =
`
## Questions
For any Additional questions, Please reach out to: ${output.email}
Or visit ${output.user} on github! Thank you.\n`

markdown += questionMark;
let licenseMark =
`
## License\n`
markdown += licenseMark;
markdown += renderLicenseBadge(output.license);
markdown += renderLicenseSection(output.license);
    
  
return markdown
}
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    let badge = "";
    
    if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
      case "ISC":
        licenseLink = "https://opensource.org/licenses/ISC"
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "Unlicensed":
      licenseLink = "";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License \n"
    licenseSection += "For more information, please refer to "+ renderLicenseLink(license) + ".\n";
  }

  return licenseSection;
}


module.exports = generateMarkdown;
