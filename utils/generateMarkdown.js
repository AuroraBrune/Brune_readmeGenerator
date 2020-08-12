// function to generate markdown for README
function generateMarkdown(data)  {
  return `# Title: ${data.title}

   ![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'})

  Project by ${data.username}

  ## Description
   ${data.description}

   ## Table of Contents
  - [Title](#Title)
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Contact](#Contact)

   ## Installation:
   ${data.installation}

  ## Usage:
   ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Tests:
  ${data.tests}

   ## Contact:
  ${data.contact}

 `;
}

module.exports = generateMarkdown