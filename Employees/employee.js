const validator = require("validator");
class Employee {
  // constructs new employees
  constructor(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
    if (
      typeof email !== "string" ||
      !email.trim().length ||
      validator.isEmail(email) === false
    ) {
      throw new Error("Expected parameter 'email' to be a valid email string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  // all employee functions
}

module.exports = Employee;
