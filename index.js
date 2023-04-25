const cTable = require('console.table');
const inquirer = require('inquirer')
const questions = require('./questions');
const mysql = require('mysql2');
const querySearch = require('./db/DB.js')

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: 'Drexel2021!',
    database: 'company_db'
});
db.connect(err=>{
    if(err) throw err;
}); 

function init = () => viewOptions()

const viewOptions =

 