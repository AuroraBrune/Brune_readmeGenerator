// function to generate markdown for README
function generateMarkdown(data)  {
  return `# ${data.title}

   ![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'})

  Repo by ${data.name}
  ${data.username}

  ## Description
   ${data.description}

   ## Table of Contents
  - Title
  - Description
  - Installation
  - Usage
  - License
  - Contributors
  - Tests
  - Questions

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