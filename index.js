const inquirer = require('inquirer');
const mysql = require('mysql12')

inquirer.prompt([
    {
  type: 'input',
  name: 'choices',
  message: ' What wouold you like to do?',
  choices: [
    'View All Emloyees',
    'View all roles',
    'view all employes',
    'add a department',
    'add a role',
    'add an employee',
    'update an employee role',
  ]
    }
])
