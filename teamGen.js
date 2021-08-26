//const employee = require("./Employees/employee.js");
const engie = require("./Employees/engie.js");
const intern = require("./Employees/intern.js");
const manager = require("./Employees/manager.js");
const inq = require("inquirer");
const fs = require("fs");
const empQuestions = [
  {
    type: "list",
    message: "What type of employee do you have?",
    name: "empType",
    choices: ["Manager", "Engineer", "Intern"],
  },
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
];
const engQuestions = [
  {
    type: "input",
    message: "What is the their git hub username?",
    name: "gitUser",
  },
];
const intQuestions = [
  {
    type: "input",
    message: "What is the their school?",
    name: "school",
  },
];
const manQuestions = [
  {
    type: "input",
    message: "What is the their office number?",
    name: "officeNum",
  },
];
const fromTheTop = [
  {
    type: "list",
    message: "Do you have more employees?",
    name: "moreEmp",
    choices: ["Yes", "NO"],
  },
];

function getSetInfo() {
  inq.prompt(empQuestions).then((response) => {
    if (response.empType === "Manager") {
      inq.prompt(manQuestions).then((manResponse) => {
        const emp = new manager(
          response.name,
          response.id,
          response.email,
          manResponse.officeNum
        );
        generateCard(emp);
      });
    } else if (response.empType === "Engineer") {
      inq.prompt(engQuestions).then((engResponse) => {
        const emp = new engie(
          response.name,
          response.id,
          response.email,
          engResponse.officeNum
        );
        generateCard(emp);
      });
    } else {
      // Intern
      inq.prompt(intQuestions).then((intResponse) => {
        const emp = new intern(
          response.name,
          response.id,
          response.email,
          intResponse.officeNum
        );
        generateCard(emp);
      });
    }
  });
  inq.prompt(fromTheTop).then((ans) => {
    if (ans.moreEmp === "Yes") {
      getSetInfo();
    }
  });
}

function generateCard(daEmp) {
  let empCard;
  let spec;
  let img;
  let imgDesc;
  if (daEmp.getRoll() === "Manager") {
    img = "";
    imgDesc = "manager img";
    spec = daEmp.officeNum();
  } else if (daEmp.getRoll() === "Engineer") {
    img = "";
    imgDesc = "engineer img";
    spec = `<a href="${daEmp.getGitHub()}">${daEmp.getGitHub()}</a>`;
  } else {
    img = "";
    imgDesc = "intern img";
    spec = daEmp.getSchool();
  }
  empCard = `<div class="row row-cols-1 row-cols-md-2 g-4">\n`;
  empCard += `<div class="col">\n`;
  empCard += `<div class="card">\n`;
  empCard += `<img src="${img}" class="card-img-top" alt="${imgDesc}" />\n`;
  empCard += `<div class="card-body">\n`;
  empCard += `<h5 class="card-title">Card title</h5>\n`;
  empCard += `</div>\n`;
  empCard += `<ul class="list-group list-group-flush">\n`;
  empCard += `<li class="list-group-item">${daEmp.getName()}</li>\n`; //name
  empCard += `<li class="list-group-item">${daEmp.getId()}</li>\n`; //id
  empCard += `<li class="list-group-item">
                <a href="mailto:${daEmp.getEmail()}" target="NO_BLANK"
                  >${daEmp.getEmail()}</a
                >
              </li>\n`; //email
  empCard += `<li class="list-group-item">${spec}</li>\n`; //spec proptery
  empCard += `</ul>\n`;
  empCard += `</div>\n`;
  empCard += `</div>\n`;
  return empCard;
}
// fs.appendFile(`./output/index.html`, generateCard(response,intResponse, intern), (err) =>
//   err ? console.log(err) : console.log("Success!")
// );
getSetInfo();
