// const employee = require("./lib/employee");
const inquirer = require("inquirer");
// get the client
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Pinoyboy10!",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

//console.table
const cTable = require('console.table');

function startTracker() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "actions",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Departments",
        ],
      },
    ])
    .then((answers) => {
      if (answers.actions == "View All Employees") {
        viewEmployees();
      } else if (answers.actions == "Add Employee") {
        addEmployees();
      } else if (answers.actions == "Update Employee Role") {
        employeeRole();
      } else if (answers.actions == "View All Roles") {
        viewRoles();
      } else if (answers.actions == "Add Role") {
        addRoles();
      } else if (answers.actions == "View All Departments") {
        viewDepartments();
      } else if (answers.actions == "Add Departments") {
        addDepartments();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function To Add Empoyee

function addEmployees() {
  db.query("SELECT * FROM employees", function (err, employeeResults) {
    const employees = employeeResults.map((employee) => {
      return {
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      };
    });
    db.query("SELECT * FROM roles", function (err, roleResults) {
      const roles = roleResults.map((role) => {
        return { name: role.title, value: role.id };
      });
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName",
          },
          {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName",
          },
          {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: roles,
          },
          {
            type: "list",
            message: "Who is the employee's manager?",
            name: "managerName",
            choices: employees,
          },
        ])
        .then(function (answers) {
          if (
            (answers.managerName == "none",
            "John Doe",
            "Mike Chan",
            "Ashley Rodriguez",
            "Kevin Tupik",
            "Kunal Singh",
            "Malia Brown")
          ) {
            sendToEmployees(answers);
          } else {
            console.log("Error");
          }
        });
    });
  });
}

// Function To Update Empoyee Role
function employeeRole() {
  db.query("SELECT * FROM employees", function (err, employeeResults) {
    const employees = employeeResults.map((employee) => {
      return {
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      };
    });
    db.query("SELECT * FROM roles", function (err, roleResults) {
      const roles = roleResults.map((role) => {
        return { name: role.title, value: role.id };
      });
      inquirer
        .prompt([
          {
            type: "list",
            message: "Which Employees role do you want to udpate?",
            name: "employeeName",
            choices: employees, // From The table employees
          },
          {
            type: "list",
            message: "What role do you want to assign the selected employee?",
            name: "role",
            choices: roles, // From The table roles
          },
        ])
        .then(function (answers) {
          if (
            (answers.role == "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team",
            "Lawyer",
            "Customer Service")
          ) {
            // Create db.query statements that use the data from inquirer to send dirctly to database in sql
            updateEmployeeRole();
          } else {
            console.log("Error");
          }
        });
    });
  });
}

// Function That Adds New Roles
function addRoles() {
  db.query("SELECT * FROM departments", function (err, departmentResults) {
    const departments = departmentResults.map((department) => {
      return {
        name: department.department_name,
        value: department.id,
      };
    });
    db.query("SELECT * FROM roles", function (err, roleResults) {
      const roles = roleResults.map((role) => {
        return { name: role.title, value: role.id };
      });
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the name of the role?",
            name: "roleName",
          },
          {
            type: "input",
            message: "What is the salary of the role?",
            name: "salary",
          },
          {
            type: "list",
            message: "Which department does the role belong to?",
            name: "deparment",
            choices: departments,
          },
        ])
        .then(function (answers) {
          if (
            (answers.department == "Sales",
            "Engineering",
            "Legal",
            "Customer Care",
            "Accounting")
          ) {
            //Add db.query statement that adds the correct dpartment_id number
            sendToRoles(answers);
          } else {
            console.log("Error");
          }
        });
    });
  });
}

// Function That Addes New Departments
function addDepartments() {
  db.query("SELECT * FROM departments", function (err, departmentResults) {
    const departments = departmentResults.map((department) => {
      return {
        name: department.department_name,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the department?",
          name: "departmentName",
        },
      ])
      .then(function (answers) {
        if ((answers.departmentName = answers)) {
          // Create db.query statements that use the data from inquirer to send dirctly to database in sql
          sendToDepartments(answers);
        } else {
          console.log("Error");
        }
      });
  });
}

startTracker();

// db.queries for viewing the database tables
function viewDepartments() {
  db.query("SELECT * FROM departments", function (err, results) {
    console.log(results);
    startTracker();
  });
}

function viewRoles() {
  db.query("SELECT * FROM roles", function (err, results) {
    console.log(results);
    startTracker();
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employees", function (err, results) {
    console.log(results);
    startTracker();
  });
}

//db queries for adding to the database tables

// Used to create new departments
function sendToDepartments(answers) {
  db.query(
    "INSERT INTO departments (department_name) VALUES ?",
    answers.departmentName,
    function (err, results) {
      console.log(err);
      startTracker();
    }
  );
}

// Used to Create New roles
function sendToRoles(answers) {
  db.query(
    "INSERT INTO roles (title, salary)VALUES (?,?)",
    [answers.roleName, answers.salary],
    function (err, results) {
      console.log(err);
      startTracker();
    }
  );
}

//Used to add new employee into employee table
function sendToEmployees(answers) {
  db.query(
    "INSERT INTO employees (role_id, manager_id, first_name, last_name)VALUES (?,?,?,?)",
    [answers.role, answers.managerName, answers.firstName, answers.lastName],
    function (err, results) {
      console.log(err);
      startTracker();
    }
  );
  
}

function updateEmployeeRole(answers) {
  db.query("DELETE FROM employees WHERE 'role_id' = ? AND 'department_id = ?'", id, (err,result)=> {
    if(err) {
      console.log(err);
    }
    console.log(result);
  });

  db.query(
    "INSERT INTO employees role_id VALUES ?",
    answers.role,
    function(err, results) {
      console.log(err);
      startTracker();
    }
  )
}