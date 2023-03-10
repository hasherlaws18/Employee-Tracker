const inquirer = require("inquirer");
const fs = require('fs');
const mysql = require('mysql2');
const prompt = inquirer.createPromptModule();
const cTable =require('console.table');
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

const promptUser = () => {
return inquirer.prompt([
    {
  type: 'list',
  name: 'choices',
  message: ' What wouold you like to do?',
  choices: [
    'View All Departments',
    'View all roles',
    'View all employees',
    'add a department',
    'add a role',
    'add an employee',
    'update an employee role',
  ],
    },
  
])
.then((answers) => {
  const choices = answers;

  if(choices === 'View All Departments'){
    showdepartment();
  }
  if(choices === 'View all roles'){
    showroles();
  }
  if(choices === 'View all employees'){
    showemployee();
  }
  if(choices === 'add a department'){
    addroles();
  }
  if(choices === 'add a role'){
      addrole();
    }
  if(choices === 'add an employee'){
      addemployee();
    }
  if(choices === 'update an employee role'){
      updateemployee();
    }
  

});
}


showdepartment = (departments) => {
  db.query('SELECT department.id AS id, department.name FROM department')
};

showroles = () => {
  db.query('SELECT ')
}

promptUser()