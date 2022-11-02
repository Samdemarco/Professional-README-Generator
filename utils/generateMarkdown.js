// "Apache (https://opensource.org/licenses/Apache-2.0) ",
// "Academic (https://opensource.org/licenses/AFL-3.0)",
// "GNU (https://opensource.org/licenses/gpl-license)",
// "ISC (https://opensource.org/licenses/ISC)",
// "MIT (https://opensource.org/licenses/MIT)",
// "Mozilla (https://opensource.org/licenses/MPL-2.0)",
// "Open (https://opensource.org/licenses/alphabetical)"

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, licenseURL) {

  return `<h1>${answers.projectTitle} </h1>
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  ## Description
   ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
   ${answers.installation}
  ## Usage
   ${answers.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  ${answers.license} License URL:   ${licenseURL}. 
  ## Contributors
   ${answers.contributing}
  ## Tests
   ${answers.tests}
  ## Questions
   ${answers.questions}<br />
  <br />
  My GitHub: [${answers.username}](https://github.com/${answers.username})

  Contact me via email for any issues: ${answers.email}<br /><br />
      `;
    }



module.exports = generateMarkdown;
