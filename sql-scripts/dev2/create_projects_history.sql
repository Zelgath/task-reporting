CREATE TABLE `projects_history` (
  `id_project` int(11) NOT NULL,
  `project_description` varchar(45) NOT NULL,
  `project_client` varchar(45) NOT NULL,
  `project_start_date` date NOT NULL,
  `project_end_date` date NOT NULL,
  `project_total_cost` int(11) NOT NULL,
  `project_total_profit` int(11) NOT NULL,
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci