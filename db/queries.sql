-- Attempt at adding the salaries based on departments

-- FROM company_db;

-- SELECT department_id, COUNT(id) AS number_department
-- FROM roles
-- GROUP BY department_id;

-- SELECT department_id, SUM(salary) AS sum_salaries
-- FROM roles
-- GROUP BY department_id;

-- Attempt at joining the Roles & Department tables
SELECT roles.id as role_id, roles.department_id as department_id, roles.title as role_title,
roles.salary as role_salary, departments.id as department_id, departments.department_name as department_name
FROM roles
JOIN departments ON roles.department_id = departments.id;

################
## In the result fieldset, you can:
## 1. preface the field names with the table name to specify
## 2. alias the original field name to something else


-- -- joining the Employees & Department tables
SELECT *
FROM employees
JOIN departments ON employees.role_id = departments.id;

################
## In the result fieldset, you can:
## 1. preface the field names with the table name to specify
## 2. alias the original field name to something else


