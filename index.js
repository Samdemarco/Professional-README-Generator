// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt( [{
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Provide a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process of your project: ",
},
{
    type: "input",
    name: "usage",
    message: "What is the usage of this project?"
},
{
    type: "list",
    name: "license",
    message: "Chose the used license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this project?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "questions",
    message: "How do I report issues? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}]);
}

//CREATED A LICENSE URL OBJ SINCE APPENDING LICENSE NAME DIRECTLY TO OPENSOURCE.ORG IS NOT 1:1
const licenseURL = {
    Apache: "https://opensource.org/licenses/Apache-2.0",
    Academic: "https://opensource.org/licenses/AFL-3.0",
    GNU: "https://opensource.org/licenses/gpl-license",
    ISC: "https://opensource.org/licenses/ISC",
    MIT: "https://opensource.org/licenses/MIT",
    Mozilla: "https://opensource.org/licenses/MPL-2.0",
    Open: "https://opensource.org/licenses/alphabetical"

}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const licenseIndex = answers.license;
        const generateContent = generateMarkdown(answers, licenseURL[licenseIndex]);

        await fs.writeFile('README.md', generateContent)

        console.log('✔️  README.md succesfully generated!');
    }   catch(err) {
        console.log(err);
    }
  }
  
//CALL init() TO START APPLICATION
init();






