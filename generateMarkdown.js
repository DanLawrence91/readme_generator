// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let response;
  switch (license) {
    case "MIT":
      response = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "ISC":
      response = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "GNU General Public License v3":
      response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache 2.0":
      response = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Other":
      response = "Please add a license badge here. The following link has a number of common license badges for use: [https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)";
      break;
    case "No license":
      response = "";
      break;
  }
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenceLink;
//   switch (license) {
//     case 'MIT':
//       licenceLink = ;
//       break;
//     case 'ISC':
//       licenceLink = ;
//       break;
//     case 'GNU General Public License v3':
//       licenceLink = ;
//       break;
//     case 'Apache 2.0':
//       licenceLink = ;
//       break;
//     default:
//       licenceLink = '';
//       break;
//   }
// }
//

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  switch (license) {
    case "MIT":
      licenseSection = "## License\n\tThis project is MIT licensed, please see the badge at the top of the page";
      break;
    case "ISC":
      licenseSection = "## License\n\tThis project is ISC licensed, please see the badge at the top of the page";
      break;
    case "GNU General Public License v3":
      licenseSection = "## License\n\tThis project is GPL v3 licensed, please see the badge at the top of the page";
      break;
    case "Apache 2.0":
      licenseSection = "## License\n\tThis project is Apache 2.0 licensed, please see the badge at the top of the page";
      break;
    case "Other":
      licenseSection = "## License\n\tPlease include details of selected license here";
      break;
    case "No license":
      licenseSection = "";
      break;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// installation section - have npm i (project name) as a default option if enter pressed
//
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Deployed site](#links)
  - [Questions](#questions)

  ## Technology used
  ${data.technology}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Deployed Site
  ${data.links}

  ## Questions
  If there are any questions regarding this project please contact me through my email - ${data.email}
  Or please visit my GitHub profile which has further contact information - [${data.github}](https://github.com/${data.github})
`;
}

module.exports = {
  generateMarkdown,
};
