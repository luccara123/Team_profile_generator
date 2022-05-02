const inquirer = require('inquirer');
const fs = require('fs');
const createHTML = require('./src/createHTML');

const teamMembers = [];

const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const { create } = require('domain');


function newEmployee() {
    inquirer.prompt(addTeamMember).then((response) => {
        
        console.log(response);
        switch (response.addEmployee) {
            case 'Engineer':
                enginQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            case 'Done':
                console.log('Creating your team!')
                console.log(teamMembers);
        }
    })
}
// QUESTIONS

// MANAGER
function managerQuestions(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter the name of the manager (Required)',
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('You need to enter the name of the manager to continue');
                        return false;
                    }
                }
            },
    
        // Manager's id
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter the managers Id number (Required)',
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('You need to enter the managers id number to continue');
                        return false;
                    }
                }
            },
    
        //Manager's email address
    
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter the managers email address (Required)',
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log('You need to enter the managers email address to continue');
                        return false;
                    }
                }
            },
    
        //Manager's office number
    
            {
                type: 'input',
                name: 'managerOfficeNo',
                message: 'Enter the managers office number (Required)',
                validate: managerOfficeInput => {
                    if (managerOfficeInput) {
                        return true;
                    } else {
                        console.log('You need to enter the managers office number to to continue');
                        return false;
                    }
                }
            },
    ]).then((response) => {
            let name = response.managerName;
            let id = response.managerId;
            let email = response.managerEmail;
            let officeNo = response.managerOfficeNo;

            const manager = new Manager (name, id, email, officeNo);

            teamMembers.push(manager)
            console.log(manager);

            newEmployee()    
        })
}

// ENGINEER
function enginQuestions (){
    inquirer
        .prompt([
    // Engineer's name
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the name of the engineer (Required)',
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log('You need to enter the name of the engineer to continue');
                        return false;
                    }
                }
            },

            // Engineer's id
            {
                type: 'input',
                name: 'engineerId',
                message: 'Enter the engineers Id number (Required)',
                validate: engineerIdInput => {
                    if (engineerIdInput) {
                        return true;
                    } else {
                        console.log('You need to enter the engineers id number to continue');
                        return false;
                    }
                }
            },

            //Engineer's email address

            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the engineers email address (Required)',
                validate: engineerEmailInput => {
                    if (engineerEmailInput) {
                        return true;
                    } else {
                        console.log('You need to enter the engineers email address to continue');
                        return false;
                    }
                }
            },

            //Engineer's github username

            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter the engineers github username (Required)',
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                        return true;
                    } else {
                        console.log('You need to enter the engineers github username to continue');
                        return false;
                    }
                }
            }
        ]).then((response) => {
            let name = response.engineerName;
            let id = response.engineerId;
            let email = response.engineerEmail;
            let github = response.engineerGithub

            const engineer = new Engineer (name, id, email, github);

            teamMembers.push(engineer);
            console.log(teamMembers);

            newEmployee()
        })
}

// INTERN
function internQuestions (){
    inquirer
       .prompt([// intern'name
       {
           type: 'input',
           name: 'internName',
           message: 'Enter the name of the intern (Required)',
           validate: internNameInput => {
               if (internNameInput) {
                   return true;
               } else {
                   console.log('You need to enter the name of the intern to continue');
                   return false;
               }
           }
       },
   
       // intern's id
       {
           type: 'input',
           name: 'internId',
           message: 'Enter the interns Id number (Required)',
           validate: internIdInput => {
               if (internIdInput) {
                   return true;
               } else {
                   console.log('You need to enter the interns id number to continue');
                   return false;
               }
           }
       },
   
       //intern's email address
   
       {
           type: 'input',
           name: 'internEmail',
           message: 'Enter the interns email address (Required)',
           validate: internEmailInput => {
               if (internEmailInput) {
                   return true;
               } else {
                   console.log('You need to enter the interns email address to continue');
                   return false;
               }
           }
       },
   
       //intern's school name
   
       {
           type: 'input',
           name: 'internSchool',
           message: 'Enter the interns school name (Required)',
           validate: internSchoolInput => {
               if (internSchoolInput) {
                   return true;
               } else {
                   console.log('You need to enter the interns school name to continue');
                   return false;
               }
           }
       },
     ]).then((response) => {
           let name = response.internName;
           let id = response.internId;
           let email = response.internEmail;
           let school = response.internSchool;

           const intern = new Intern (name, id, email, school);
           //Add to team members array
           teamMembers.push(intern);
           console.log(teamMembers);

           newEmployee()
       })
}

const addTeamMember =[
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Choose the type of employee you would like to add for your team, if the team is complete select "Done" (Required)',
        choices: ['Engineer', 'Intern', 'Done'],
        validate: addPeopleInput => {
            if (addPeopleInput) {
                return true;
            } else {
                console.log('You need to select an option to continue');
                return false;
            }
        }
    },
]






const writeToFile = response => {
    fs.writeFile('./dist/index.html', response, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The team profile page has been created!")
        }
    })
}; 

managerQuestions()
// if remove all the thens, the prompt works
  .then(newEmployee)
  .then(teamMembers => {
    return createHTML(teamMembers);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

  
    