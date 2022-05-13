-- Attempt at adding the salaries based on departments

-- FROM course_names;

-- SELECT department_id, COUNT(id) AS number_department
-- FROM roles
-- GROUP BY department_id;

-- SELECT department_id, SUM(salary) AS sum_salaries
-- FROM roles
-- GROUP BY department_id;

-- Attempt at joining the Roles & Department tables
-- SELECT *
-- FROM roles
-- JOIN departments ON roles.department_id = departments.id;

-- ################
-- ## In the result fieldset, you can:
-- ## 1. preface the field names with the table name to specify
-- ## 2. alias the original field name to something else

-- -- Attempt at joining the Employees & Department tables
-- SELECT *
-- FROM employees
-- JOIN departments ON employees.department = departments.id;

-- ################
-- ## In the result fieldset, you can:
-- ## 1. preface the field names with the table name to specify
-- ## 2. alias the original field name to something else


