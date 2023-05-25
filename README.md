# SQL-content-management-systems

## Description
A database using Oracle's SQL to manage all your department, roles and employee information! For this project I primarily used SQL, SQLite, SQL2 and javascript to create a functioning program you can run in the terminal. 

## Installation
To install, your going to need to make sure you have inquirer, dotenv, and mysql2 in the package.json. To ensure the program works, I recommend running it on the versions below and checking if its the same under the dependencies in the package file: 
"console.table": "^0.10.0",
    "dotenv": "^16.0.3",
    "inquirer": "^8.2.4",
    "mysql2": "^3.2.3".
    
With the files matching up we can now do an 
 
 With the packages dealt with, we can now focus on getting SQL installed. Best refer to Oracle's documentation [here:](https://docs.oracle.com/cd/E39885_01/doc.40/e38928/install.htm#RPTIG122 "here:")

## Usage
To begin, go over to the files explorer section on your screen and right click the package.json file. There will be an option to "open the integrated terminal". Click on it and you should see in the bottom of the screen a terminal pop up. Click inside the terminal and enter the following command: "npm i". This allows you to install all the packages as they are without needing to change anything. 

To ensure we have to data to work with, you will also need to populate a database to work with. To do that, we need to login to our SQL program. Assuming you followed the SQL documentation correctly, we can log in to SQL directly from the terminal. We will do so by running the command "MYSQL -u root -p". This command allows us to directly access MYSQL at the root of the program and provide our password. A prompt will appear to enter a password. If you created a password for mysql, enter it here now. We can now populate our database! 

We now need to select the database to use. To do this, enter the command "SOURCE db/schema.sql;" and you will now have a database to use. We will also populate the database by running this command shortly after: "SOURCE db/seed.sql;" and give ourselves data to play with. With that done we can now log out of MYSQL by running the command "QUIT".

Once this is complete, run this command to get the program running: "npm start build". From there, a list of options will appear giving you ways to examine the database itself. To see it in action, check this video below:
https://drive.google.com/file/d/1G9eqgOzRgNCEsdILP-tYVInXjmwFYedu/view


