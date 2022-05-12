// const employee = require("./lib/employee");
const inquirer = require("inquirer");
// get the client
const mysql = require('mysql2');



// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Pinoyboy10!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
  
function startTracker() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "actions",
            choices: 
            [
            "View All Employees","Add Employee","Update Employee Role",
            "View All Roles","Add Role","View All Departments","Add Departments"
            ]
        }
    ])
    .then((answers) => {
      if  (answers.actions == "View All Employees") {
          viewEmployees(); // Views All Employees (Use MySQL 2 to grab table data of joined tables)
      }
      else if  (answers.actions == "Add Employee") {
          addEmployees();
      }
      else if  (answers.actions == "Update Employee Role") {
          employeeRole();
      }
      else if  (answers.actions == "View All Roles") {
          viewRoles();
      }
      else if  (answers.actions == "Add Role") {
          addRoles();
      }
      else if  (answers.actions == "View All Departments") {
          viewDepartments();
      }
      else if  (answers.actions == "Add Departments") {
          addDepartments();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    })
}

// Function To Add Empoyee

function addEmployees() {
    inquirer.prompt([
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
            choices:
            [
            "Sales Lead","Salesperson","Lead Engineer","Software Engineer",
            "Account Manager","Accountant","Legal Team","Lawyer","Customer Service"
            ]
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            name: "managerName",
            choices: 
            [
            "none", "John Doe", "Mike Chan","Ahsley Rodriguez",
            "Kevin Singh","Malia Brown"
            ]
        },
    ])
    .then(function(answers) {
        // Create db.query statements that use the data from inquirer to send dirctly to database in sql

        // const newEmployee = new employee(answers.firstName, answers.lastName, answers.role, answers.managerName);
        // inputs.push(employee); //need to make constructer for this (can export from another file)
        if (answers.managerName == "none","John Doe","Mike Chan","Ashley Rodriguez","Kevin Tupik","Kunal Singh","Malia Brown") {
            startTracker();
        } else {
            console.log("Error")
        }
    })
 }

 // Function To Update Empoyee Role
function employeeRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which Employees role do you want to udpate?",
            name: "employeeName",
            choices:
            [
            "" // All Employees from database will appear here
            ]
        },
        {
            type: "list",
            message: "What role do you want to assign the selected employee?",
            name: "role",
            choices:
            [
            "Sales Lead","Salesperson","Lead Engineer","Software Engineer",
            "Account Manager","Accountant","Legal Team","Lawyer","Customer Service"
            ]
        },
    ])
    .then(function(answers) {
       // Create db.query statements that use the data from inquirer to send dirctly to database in sql
        if (answers.role == "Sales Lead","Salesperson","Lead Engineer","Software Engineer",
        "Account Manager","Accountant","Legal Team","Lawyer","Customer Service") {
            startTracker();
        } else {
            console.log("Error")
        }
    })
 }

 // Function That Adds New Roles
function addRoles() {
    inquirer.prompt([
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
            choices:
            [
            "Engineering","Finance","Legal","Sales","Service"
            ]
        },
    ])
    .then(function(answers) {
       // Create db.query statements that use the data from inquirer to send dirctly to database in sql
        if (answers.department == "Engineering","Finance","Legal","Sales","Service") {
            startTracker();
        } else {
            console.log("Error")
        }
    })
}


// Function That Addes New Departments
function addDepartments() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department?",
            name: "departmentName",
        },
    ])
    .then(function(answers) {
       // Create db.query statements that use the data from inquirer to send dirctly to database in sql
        if (answers.departmentName) {
            startTracker();
        } else {
            console.log("Error")
        }
    })
}
  
startTracker();

// db.queries for the database tables
function viewDepartments() {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
        startTracker();
      });
}

function viewRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
        startTracker();
      });
}

function viewEmployees() {
db.query('SELECT * FROM employees', function (err, results) {
    console.log(results);
    startTracker();
  });
}
