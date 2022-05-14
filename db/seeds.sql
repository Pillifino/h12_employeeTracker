-- USE company_db;

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
    
-- COPY OF EMPLOYEES INCASE I MESS UP
INSERT INTO employees (role_id,manager_id,first_name,last_name)
VALUES (1, 1, "Henry", "Armstrong"),
       (1, 4, "Paul", "Mcartney"),
       (2, 3, "Eric", "Clapton"),
       (2, 1, "Sally", "Clemson"),
       (1, 1, "Austin", "Powers"),
       (4, 2, "Robert", "Deniro"),
       (3, 1, "Emily", "Madding"),
       (3, 4, "Lawrence", "Pineda"),
       (4, 4, "Danny", "Phantom");

-- INSERT INTO employees (role_id,manager_id,department_id,first_name,last_name)
-- VALUES (1, 1, 3, "Henry", "Armstrong"),
--        (1, 4, 5, "Paul", "Mcartney"),
--        (2, 3, 6, "Eric", "Clapton"),
--        (2, 1, 7, "Sally", "Clemson"),
--        (1, 1, 2, "Austin", "Powers"),
--        (4, 2, 4, "Robert", "Deniro"),
--        (3, 1, 8, "Emily", "Madding"),
--        (3, 4, 3, "Lawrence", "Pineda"),
--        (4, 4, 2, "Danny", "Phantom");
       
