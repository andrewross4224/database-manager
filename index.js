const inquirer = require('inquirer');
const mysql = require('mysql2');

// need to add database or will throw err
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Alien6060!',
        database: 'employee_directory'
    },
);

db.connect((err) => {
    if(err){
    console.log(err)
    } else {
        console.log('Connected to employee database')
    }
});

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