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
    type: "number",
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
    type: "number",
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
        fs.appendFile(
          `./output/index.html`,
          generateCard(emp),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreEmp === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.empType === "Engineer") {
      inq.prompt(engQuestions).then((engResponse) => {
        const emp = new engie(
          response.name,
          response.id,
          response.email,
          engResponse.gitUser
        );
        fs.appendFile(
          `./output/index.html`,
          generateCard(emp),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreEmp === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else {
      // Intern
      inq.prompt(intQuestions).then((intResponse) => {
        const emp = new intern(
          response.name,
          response.id,
          response.email,
          intResponse.school
        );
        fs.appendFile(
          `./output/index.html`,
          generateCard(emp),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreEmp === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    }
  });
}

function generateCard(daEmp) {
  let empCard;
  let spec;
  let img;
  let imgDesc;
  if (daEmp.getRole() === "Manager") {
    img = "https://raw.githubusercontent.com/HavoxPrime/teamProfileGenHW/main/imgs/managerCoffe.png";
    imgDesc = "manager img";
    spec = `Office Number: ${daEmp.getOfficeNum()}`;
  } else if (daEmp.getRole() === "Engineer") {
    img = "https://raw.githubusercontent.com/HavoxPrime/teamProfileGenHW/main/imgs/engieGlasses.png";
    imgDesc = "engineer img";
    spec = `GitHub: <a href="${daEmp.getGitHub()}">${daEmp.getGitHub()}</a>`;
  } else {
    img = "https://raw.githubusercontent.com/HavoxPrime/teamProfileGenHW/main/imgs/internPencil.png";
    imgDesc = "intern";
    spec = `School: ${daEmp.getSchool()}`;
  }
  empCard = `<div class="col">\n`;
  empCard += `<div class="card">\n`;
  empCard += `<img src="${img}" class="card-img-top" alt="${imgDesc}" />\n`;
  empCard += `<div class="card-body">\n`;
  empCard += `<h5 class="card-title">${daEmp.getRole()}</h5>\n`;
  empCard += `</div>\n`;
  empCard += `<ul class="list-group list-group-flush">\n`;
  empCard += `<li class="list-group-item">Name: ${daEmp.getName()}</li>\n`; //name
  empCard += `<li class="list-group-item">Id: ${daEmp.getId()}</li>\n`; //id
  empCard += `<li class="list-group-item">Email: 
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

function finishingStroke(){
  const lastwords=`</div>\n</body>\n</html>`
  fs.appendFile(`./output/index.html`, lastwords, (err) => (err ? console.log(err) : console.log("Card successfully added!")));
}

getSetInfo();
