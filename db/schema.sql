DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE movies_db;

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
