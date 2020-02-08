CREATE USER 'taskuser1'@'localhost' IDENTIFIED BY 'task';
GRANT INSERT, SELECT, DELETE, UPDATE ON task_reporting. * TO 'taskuser1'@'localhost';