
const intro = [
{
    type: "list",
    message: "what would you like to do?",
    name: "task",
    choices: [ 'view_departments', 'view_roles', 'view_employees', 'add_employee', 'add_role', 'add_department', 'update_employee']
},
];

const addDepartment = [
    {
    type: "input",
    message: "Please enter a new department name.",
    Name: "newDeptName",
}
];
const addRole = [
    {
    type: "input",
    message: "Please enter a new role title.",
    Name: "newRoleTitle",
},
{
    type: "input",
    message: "Please enter the salary of new role.",
    Name: "newRoleSalary",
},
    {
    type: "input",
    message: "What department does this employee belong to?.",
    Name: "newDeptName",
}
];
const addEmployee = [
    {
    type: "input",
    message: "What is the employee's first name?",
    Name: "newEmployeeFirstName",
},
{
    type: "input",
    message: "What is the employee's last name?",
    Name: "newEmployeeLastName",
},
{
    type: "input",
    message: "What is the employee's role?",
    Name: "newEmployeeRole",
},
{
        type: "input",
        message: "What department does new employee belong to?",
        Name: "newEmployeeDepartment",
},
{
    type: "input",
    message: "Who is the employee's manager?",
    Name: "newEmployeeManager",
},
];

const updateEmployeeInfo = [
{
    type: "input",
    message: "select the employee you want to update.",
    name: "employeeUpdate"
},
{
    type: "input",
    message: "select the employee you want to update.",
    name: "employeeUpdate"
},
];
module.exports = {intro, addDepartment, addRole, addEmployee, updateEmployeeInfo}