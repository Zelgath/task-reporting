CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `id_employee` int(11) NOT NULL,
  `rights` varchar(45) NOT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_employee_UNIQUE` (`id_employee`),
  CONSTRAINT `id_employee_u` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id_employee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci