// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//Licnese link will go in button and also section

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// installation section - have npm i (project name) as a default option if enter pressed
//
function generateMarkdown(data) {
  return `# ${data.title}

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install this project please follow the following steps:
  ${data.installation}

  ## Usage
  ${data.usage}

  ##License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If there are any questions regarding this project please contact me through my email - ${data.email}. 
  I can also be found with further contact information on my GitHub profile which is [GitHub Profile](#https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
