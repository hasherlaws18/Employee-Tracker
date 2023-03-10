INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Marketing"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES("Sales manager", 105000, 1),
      ('Saleperson', 85000, 1),
      ('Software Engineer', 115000, 2),
      ("Lead Engineer", 130000, 2),
      ('Marketing Manager', 100000, 3),
      ("Accountant", 80000, 4),
      ("Business Manager", 125000, 4),
      ('Lawyer', 125000, 5);
      
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('John', 'smith', 1, NULL),
      ('James', 'Jones', 2, 1),
      ('Tim', 'Johnson', 3, 4),
      ('Kevin', 'Lee', 4, NULL),
      ('Marisa', "Harris", 5, NULL),
      ('Britney', 'Munson', 6, 7),
      ('Ricardo', 'Zapien', 7, NULL),
      ('Richard', 'Laws', 8, NULL);
            
 
      