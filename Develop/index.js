// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const readmeBuild = require('inquirer');
/*

  inquirer
  .prompt([
    {
      name: "user_name",
      type: "input",
      message: "What is your name?",
    },
  ])
  .then((answer) => {
    console.log("Hello " + answer.user_name);
  });
  
  */
/*  
Title of my project 
Description, 
Table of Contents, 
Installation, 
Usage, 
License, 
Contributing, 
Tests, 
and Questions
*/
inquirer.prompt([
    {
        //Enter the Project Title
        type: 'input',
        name: 'projTitle',
        message: 'Please describe your project (less than 64 chars):',
        validate: input => 
        {
            if (input.length.trim() === 0)
            {
                return 'You must enter something other than just spaces.';
            }
            else
            {
                if (input.length > 64)
                {
                        return 'Your description is greater than 64 characters.  Try again keeping it short and sweet.';
                }
            }
            return true;
        }
    },
    {
        //Enter the Project Description
        type: 'input',
        name: 'projDescription',
        message: 'Please describe your project (less than 128 chars):',
        validate: input => 
        {
            if (input.length.trim() === 0)
            {
                return 'You must enter something other than just spaces.';
            }
            else
            {
                if (input.length > 128)
                {
                        return 'Your description is greater than 128 characters.  Try again keeping it short and sweet.';
                }
            }
            return true;
        },
    },
    {
        //Enter number of Project Table of Contents
        type: 'input',
        name: 'projToCNum',
        message: 'How many table of content items do you want (>=5 and <=10):',
        validate: input => 
        {
            if (((input < 5) && (input >10)) || (input = 'NaN'))
            {
                return 'You must enter a number between 5 and 10';
            }

            return true;
        },
    },
    {
        //Enter the Project Table of Contents
        type: 'input',
        name: 'projToCNum',
        message: 'How many table of content items do you need?',
        validate: input => 
        {
            if ((input === 0) || (input === "NaN"))
            {
                return 'You must have at least one table of content items.';
            }
            //Now get the titles
            for (var i = 0; i < 10; i++) 
            {
                var neem = "Question " + i;
                inquirer.prompt([{name: neem, message: "Guess a letter"}]).then(function(response) {
                  console.log("print");
                  lettersGuessed.push(resposne.name);
                  if (response.name.length < 1 && lettersGuessed.indexOf(response.name)) {
                    console.log(" first if statement cleared");
                    for (var u = 0; u < goldenBoy.length; u++) {
                      if (goldenBoy[u] === response.name) {
                        blank[u] = response.name;
                        console.log(blank);
                      }
                    }
                  }
                })
            }
            return true;
        },
    },
    {
        //Enter the Project Table of Contents
        type: 'input',
        name: 'projToC',
        message: 'What is your table of content item called (32 chars or less)?',
        validate: input => 
        {
            if (input.length.trim() === 0)
            {
                return 'You must enter something other than just spaces.';
            }
            else
            {
                if (input.length > 32)
                {
                        return 'Your description is greater than 32 characters.  Try again keeping it short and sweet.';
                }
            }
            
            return true;
        }
    },
])
.then(answers => {
  console.log(answers);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
