INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Customer Care"),
       ("Accounting");

INSERT INTO roles (department_id,title,salary)
VALUES (1, "Sales Lead","75000"),
       (1, "Salesperson","65000"),
       (2, "Lead Engineer", "120000"),
       (2, "Software Engineer", "160000"),
       (1, "Account Manager", "110000"),
       (4, "Accountant", "80000"),
       (3, "Legal Team Lead", "140000"),
       (3, "Lawyer", "120000"),
       (4, "Customer Service", "55000");
    
INSERT INTO employees (manager_id,first_name,last_name)
VALUES (1, "Henry", "Armstrong"),
       (4, "Paul", "Mcartney"),
       (3, "Eric", "Clapton"),
       (1, "Sally", "Clemson"),
       (1, "Austin", "Powers"),
       (2, "Robert", "Deniro"),
       (1, "Emily", "Madding"),
       (4, "Lawrence", "Pineda"),
       (4, "Danny", "Phantom");
       
