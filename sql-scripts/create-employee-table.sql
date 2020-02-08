use task_reporting;
CREATE TABLE `employee` (
	`employee_id` int not null auto_increment,
    `first_name` varchar(255) default null,
    `last_name` varchar(255) default null,
    `email` varchar(255) default null,
    `phone_number` varchar(255) default null,
    `hire_date` date default null,
    `job_id` varchar(255) default null,
    `salary` int default 0,
    `commission_pct` int default 0,
    `manager_id` int default 0,
    `department_id` int default 0,
    primary key (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET= utf8mb4;