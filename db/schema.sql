DROP DATABASE IF EXISTS employee_directory;
CREATE DATABASE employee_directory;

USE employee_directory;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department INT,
    salary DECIMAL,
    FOREIGN KEY (department)
    REFERENCES department(id)
);

-- CREATE TABLE employee (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     FOREIGN KEY (role_id)
--     REFERENCES role(id)
-- );