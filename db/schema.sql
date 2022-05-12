DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- Attempt at hooking up the tables with primary and foreign keys
CREATE TABLE departments(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);


CREATE TABLE roles(
  id INT AUTO_INCREMENT NOT NULL
  PRIMARY KEY,
  role_id INT,
  role_description TEXT NOT NULL,
  salary VARCHAR(100) NOT NULL,
  FOREIGN KEY (role_id) 
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  employee_id INT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  FOREIGN KEY (employee_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);
