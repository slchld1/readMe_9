// TODO: Create a function that returns a license badge based on which license is passed in
class MarkDown {
    static generateReadMe(output){
      return `
      # ${output.title}

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
      ${output.github}

      ## License
      ${output.license}
      `
    }

}
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(license == null){
//     return ""
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license == "MIT"){
//     return "MIT"
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = MarkDown;
