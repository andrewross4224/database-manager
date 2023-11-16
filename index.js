// dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table')
require('dotenv').config();

// user choices on startup
const DB_Options = [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role'
]

// creating connection to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'employee_directory'
    },
);

const init = () => {
    // trying to connect to db
    db.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to employee database');
            prompt1();
        }
    });
}
// initial input from user
const prompt1 = async () => {
    let input = await inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'userChoice',
            choices: [...DB_Options]
        },
    ]);
    switch (input.userChoice) {
        // View all departments
        case DB_Options[0]:
            viewDepartments();
            break;
        // View all roles
        case DB_Options[1]:
            viewRoles();
            break;
        //View all employees
        case DB_Options[2]:
            viewEmployees();
            break;
        //Add a department
        case DB_Options[3]:
            addDepartment();
            break;
        //Add a role
        case DB_Options[4]:
            addRole();
            break;
        //Add an employee
        case DB_Options[5]:
            addEmployee();
            break;
        //Update an employee role
        case DB_Options[6]:
            updateEmployeeRole();
            break;
    }
}
// Function for viewing departments
const viewDepartments = () => {
    db.query('SELECT ID, NAME AS Department FROM department', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // making new line in console for format
        console.log('')
        // inserting table
        console.table(data);
        // refreshing application
        prompt1();
    });
}
// Function for viewing roles
const viewRoles = () => {
    db.query('SELECT role.ID, Title, department.NAME AS Department, Salary FROM role JOIN department ON role.department = department.id ORDER BY role.id;', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // making new line in console for format
        console.log('')
        // inserting table
        console.table(data);
        // refreshing application
        prompt1();
    });
}
// Function for viewing employees
const viewEmployees = () => {
    db.query('SELECT employee.ID, First_Name, Last_Name, Title, department.name AS Department, role.Salary FROM employee JOIN role ON employee.role = role.id JOIN department ON role.department = department.id ORDER BY employee.id;', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // making new line in console for format
        console.log('')
        // inserting table
        console.table(data);
        // refreshing application
        prompt1();
    });
}
// Function for adding department
const addDepartment = async () => {
    let input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'department',
        }
    ]);
    let sql = "INSERT INTO department (name) VALUES (?)"
    db.query(sql, input.department, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('\nDepartment created!\n');
        prompt1();
    })
}
// Function for adding role
const addRole = async () => {
    let output = await "a"
}
// Function for adding employee
const addEmployee = async () => {
    let output = await "a"
}
// Function for updating employee role
const updateEmployeeRole = async () => {
    let output = await "a"
}

init();