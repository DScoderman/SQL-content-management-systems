const inquirer = require('inquirer')
const ctable = require('console.table')
const mysql = require ('mysql2')



function viewRoles() => {
    db.query("SELECT * FROM roles", (error, results) => {
        if (error), throw error;
        console.table(results);
        init();
    } )
}