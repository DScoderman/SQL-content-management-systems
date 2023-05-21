const cTable = require('console.table');
const inquirer = require('inquirer')
const questions = require('./questions');
const mysql = require('mysql2');

const { intro, addDepartment, addRole, updateEmployeeInfo } = require("./questions");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Drexel2021!',
    database: 'company_db'
});
db.connect(err => {
    if (err) throw err;
    init();
});

function init() {
    inquirer.prompt(intro)
        .then(answers => {
            console.log(answers)
            if (answers.task === 'view_departments') {
                viewDept()
            }
            else if(answers.task === 'add_department') {
                addDepartment()
            }
            else if (answers.task === 'add_employee') {
                addEmployee()
            }
            else if (answers.task === 'add_role') {
                addRole()
            }
            else if (answers.task === 'view_roles') {
            viewRoles()
            }
            else if (answers.task === 'update_employee'){
            updateEmployeeInfo()
            }
            else if (answers.task === 'view_employees'){
                viewEmployee()
            }
        });
}

function viewDept() {
    const sqlString = `
    SELECT *
    FROM department`;
    db.query(sqlString, (err, data) => {
        if (err) throw err;
        console.table(data)
        init();
    })
}

function viewRoles() {
    const sqlString = 
    'SELECT role.title AS "Job Title", role.id AS "Role ID", department.name AS "Department", role.salary AS "Salary" FROM role JOIN department ON role.department_id = department.id';

    db.query(sqlString, (err, data) => {
        if (err) throw err;
        console.table(data)
        init();
    })
}

function viewEmployee(){
    const sqlString= "SELECT employee.id AS `Employee ID`, employee.first_name AS `First Name`, employee.last_name AS `Last Name`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary`, CONCAT(manager.first_name, ' ', manager.last_name) AS `Manager` FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;";
    
    db.query(sqlString, (err, result) => {
      
        if (err) {
            throw err
        }
        console.table(result)
        
    })
}


function addEmployee() {
    db.query('SELECT * FROM ROLE', function (err, roleResults) {
        if(err) {
            throw err
        }
    db.query('SELECT * FROM employee WHERE manager_id IS NULL', function (err, employeeResults) {
        var employees= employeeResults.map(employee => `${employee.first_name} ${employee.last_name}`)
        employees.push("");
        console.log(employees)

    inquirer .prompt([
        {
            type: 'input',
            message: 'What is the first name?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the last name?',
            name: 'lastName'
        },
        {
            type: 'rawlist',
            message: 'role?',
            name: 'employeeRole',
            choices: roleResults.map(role => `${role.title}`)
        },
        {
            type: 'rawlist',
           message: 'Who is their manager?',
           name: 'manager',
           choices: employees
         }
    ]).then (answer => {
        const firstName = answer.firstName;
        const lastName = answer.lastName;
        const role = answer.employeeRole;
        const manager = answer.manager === "" ? undefined : answer.manager;

        db.query(`SELECT id FROM role WHERE title =?`, role, (err, results) => {
            if (err) {
                throw err
            }
            const roleID = results[0].id

        db.query(`SELECT id FROM employee WHERE CONCAT (first_name, " ", last_name) = ?`, manager, (err, managerResults) => {
            if (err) {
                throw err
            }
            const managerID = managerResults[0].id;

        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, roleID, managerID], (err, results) => {
                    if (err) {
                        throw err
                    }
                    //alerts user if the new employee was added successfully
                    console.log('Added new employee!');
                    //calls promptList function so it immediately repopulates under success notice
                    init();
             });
           });
        });
      });
    });
  });
};
         