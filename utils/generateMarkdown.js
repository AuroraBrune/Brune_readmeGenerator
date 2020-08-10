// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `# ${data.title}
          # ${data.description}
          # ${data.tableOfContents}
          # ${data.installation}
          # ${data.usage}
          # ${data.license}
          # ${data.contributors}
          # ${data.tests}
          # ${data.contact}
`;
}

module.exports = generateMarkdown;
