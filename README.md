# h12_employeeTracker

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

A role can have many employees, but an employee cannot have many roles

Create table called Departments


Questions For Inquirer

What would you like to do? (list)
    *View All Employees* (choices)
        Table Shows The Following:
            id
            first_name
            last_name
            title
            department
            salary
            manager
    *Add Employee* (choices)
        What is the employee's first name? (Input Text)
        What is the employee's last name? (Input Text)
        What is the employee's role? (list)
            Sales Lead (choices)
            Salesperson (choices)
            Lead Engineer (choices)
            Software Engineer (choices)
            Account Manager (choices)
            Accountant (choices)
            Legal Team Lead (choices)
            Lawyer (choices)
            Customer Service (choices)
        Who is the employee's manager? (list)
            None (choices)
            John Doe (choices)
            Mike Chan (choices)
            Ashley Rodriguez (choices)
            Kevin Tupik (choices)
            Kunal Singh (choices)
            Malia Brown (choices)
    *Update Employee Role* (choices)
        Which employee's role do you want to update? (list)
            All Employees (choices)
        Which role do you want to assign the selected employee? (list)
            Sales Lead (choices)
            Salesperson (choices)
            Lead Engineer (choices)
            Software Engineer (choices)
            Account Manager (choices)
            Accountant (choices)
            Legal Team Lead (choices)
            Lawyer (choices)
            Customer Service (choices)
                Updated employee's role
    *View All Roles* (choices)
        id
        title
        department
        salary
    *Add Role* (choices)
        What is the name of the role? (Input Text)
        What is the salary of the role? (Input Text)
        which department does the role belong to? (list)
            Engineering (choices)
            Finance (choices)
            Legal (choices)
            Sales (choices)
            Service (choices)
                Added (Input Text) To the database
    *View All Departments* (choices)
        id 
        Name
    *Add Departments* (choices)
        What is the name of the department? (input Text)
            Added (input) to the database
    
## Useful Links
    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.
