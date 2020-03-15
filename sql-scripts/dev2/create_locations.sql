CREATE TABLE `locations` (
  `id_location` int(11) NOT NULL AUTO_INCREMENT,
  `location_description` varchar(45) NOT NULL,
  `location_city` varchar(45) NOT NULL,
  `location_street` varchar(45) NOT NULL,
  `location_postal` varchar(45) NOT NULL,
  `location_country` varchar(45) NOT NULL,
  PRIMARY KEY (`id_location`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci