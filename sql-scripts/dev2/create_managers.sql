CREATE TABLE `managers` (
  `id_manager` int(11) NOT NULL AUTO_INCREMENT,
  `id_employee` int(11) NOT NULL,
  PRIMARY KEY (`id_manager`),
  KEY `id_employee_m_idx` (`id_employee`),
  CONSTRAINT `id_employee_m` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id_employee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci