CREATE TABLE `grades` (
  `id_grade` int(11) NOT NULL AUTO_INCREMENT,
  `grade_description` varchar(45) NOT NULL,
  `grade_min_salary` int(11) NOT NULL,
  `grade_max_salary` int(11) NOT NULL,
  PRIMARY KEY (`id_grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci