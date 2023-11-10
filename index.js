const inquirer = require('inquirer');
const mysql = require('mysql2');

// need to fix bypassing prompt

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'Alien6060!',
//         database: 'employee_directory'
//     },
//     console.log(`Connected to the employee_directory database.`)
// );

prompt1 = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'testing?',
            name: 'test',
        },
    ]).then((response) => { console.log(response.test) })
}

prompt1();