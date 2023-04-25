-- data to insert into department

INSERT INTO department (name)
VALUES ("ENGINEERING"),
        ("INNOVATION"),
        ("MARKETING"),
        ("LEGAL"),
        ("ACCOUNTING");

-- CODE DATA FOR ROLES

INSERT INTO role (title, salary, department_id)
VALUES ('software wizard', 100000, 1),
        ('research associate', 80000, 2),
        ('senior marketing expert', 75000, 3),
        ('lawyer', 120000, 4);

-- CODE FOR THE EMPLOYEE
-- TODO: DOUBLE CHECK MANAGER ID STUFF
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ('Chudd', 'Jones', 1, null),
        ('Ludachris', 'Zones', 2, 1), 
        ('Nick', 'Satchel', 3, 1),
        ('Saul', 'Goodman', 4, 1);