CREATE TABLE `departments` (
  `id_department` int(11) NOT NULL AUTO_INCREMENT,
  `department_description` varchar(45) NOT NULL,
  `id_employee` int(11) NOT NULL,
  PRIMARY KEY (`id_department`),
  KEY `id_employee_d_idx` (`id_employee`),
  CONSTRAINT `id_employee_d` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id_employee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci