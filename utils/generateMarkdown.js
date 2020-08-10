// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

  ![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'})

  _Repo by ${data.name}_

  _${data.description}_

  _Table of Contents_

  _Installation:_
  ${data.installation}

  _Usage:_
  ${data.usage}

  _Contributors:_
  ${data.contributors}

  _Contributors:_
  ${data.contributors}

  _Tests:_
  ${data.tests}

  _Contact:_
  ${data.contact}

`;
}

module.exports = generateMarkdown;
