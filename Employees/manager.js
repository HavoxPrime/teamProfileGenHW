const employee = require("./employee.js");

class Manager extends employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
      throw new Error(
        "Expected parameter 'officeNum' to be a non-negative number"
      );
    }
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
