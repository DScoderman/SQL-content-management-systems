
const intro = [
    {
        type: "list",
        message: "what would you like to do?",
        name: "task",
        choices: ['view_departments', 'view_roles', 'view_employees', 'add_employee', 'add_role', 'add_department', 'update_employee',]
    },
];

const addDepartment = [
    {
        type: "input",
        message: "Please enter a new department name.",
        name: "newDeptName",
    }
];
const addRole = [
    {
        type: "input",
        message: "Please enter a new role title.",
        name: "newRoleTitle",
    },
    {
        type: "input",
        message: "Please enter the salary of new role.",
        name: "newRoleSalary",
    },
    {
        type: "list",
        message: "What department does this employee belong to?.",
        name: "newDeptName",
        choices: []

    }
];
// const addEmployee = [
//     {
//         type: "input",
//         message: "What is the employee's first name?",
//         name: "newEmployeeFirstName",
//     },
//     {
//         type: "input",
//         message: "What is the employee's last name?",
//         name: "newEmployeeLastName",
//     },
//     {
//         type: "input",
//         message: "What is the employee's role?",
//         name: "newEmployeeRole",
//     },
//     {
//         type: "input",
//         message: "What department does new employee belong to?",
//         name: "newEmployeeDepartment",
//     },
//     {
//         type: "input",
//         message: "Who is the employee's manager?",
//         name: "newEmployeeManager",
//     },
// ];

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
module.exports = { intro, addDepartment, addRole, updateEmployeeInfo }