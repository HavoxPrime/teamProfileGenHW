const employee = require("./Employees/employee.js");
const engie = require("./Employees/engie.js");
const intern = require("./Employees/intern.js");
const manager = require("./Employees/manager.js");
const fs = require("fs");
const empQuestions = [
  {
    type: "list",
    message: "What type of employee do you have?",
    name: "empType",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "list",
    message: "Do you have more employees?",
    name: "moreEmp",
    choices: ["Yes", "NO"],
  },
];
const engQuestions = [
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the their email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the their git hub username?",
    name: "gitUser",
  },
];
const intQuestions = [
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the their email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the their school?",
    name: "school",
  },
];
const manQuestions = [
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the their email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the their office number?",
    name: "officeNum",
  },
];
