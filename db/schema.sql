DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

-- Mini Project Examples
USE company_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL,
  PRIMARY KEY,
  movie_name
  VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT NOT NULL,
  course_title VARCHAR(30) NOT NULL,
  moviw_id INT,
  review text(100) NOT NULL,
  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);

-- HW 12 Tables

CREATE Table departments (

);

CREATE Table roles (

);

CREATE Table employees (

);
