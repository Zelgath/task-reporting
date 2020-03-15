CREATE TABLE `contracts` (
  `id_contract` int(11) NOT NULL AUTO_INCREMENT,
  `contract_type` varchar(45) NOT NULL,
  `contract_start_date` date NOT NULL,
  `contract_end_date` date NOT NULL,
  `id_grade` int(11) NOT NULL,
  `contract_salary_factor` int(1) NOT NULL,
  PRIMARY KEY (`id_contract`),
  KEY `id_grade_idx` (`id_grade`),
  CONSTRAINT `id_grade` FOREIGN KEY (`id_grade`) REFERENCES `grades` (`id_grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci