const employee = require("./employee.js");

class Engineer extends employee {
  constructor(name, id, email, gitUser) {
    super(name, id, email);
    if (typeof gitUser !== "string" || !gitUser.trim().length) {
      throw new Error("Expected parameter 'gitUser' to be a non-empty string");
    }
    this.gitUser = gitUser;
  }
  getGitHub() {
    return `https://github.com/${this.gitUser}`;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
