-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_date` date DEFAULT NULL,
  `checked` tinyint(1) DEFAULT NULL,
  `checked_date` date DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `text` varchar(2000) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `shared` char(1) DEFAULT NULL,
  `shared_for_username` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `purchase_template_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
INSERT INTO `purchase` VALUES (14,'2020-12-08',0,NULL,'Леруа Мерлен',NULL,'michael','0','michael',1,NULL),(22,'2020-12-15',0,NULL,'Повседневное',NULL,'koshka','0','koshka',1,NULL),(23,'2020-12-15',0,NULL,'Бытовая химия',NULL,'koshka','0','koshka',1,NULL),(24,'2020-12-19',0,NULL,'Славич',NULL,'koshka','0','koshka',1,NULL),(28,'2020-12-25',0,NULL,'Новый год',NULL,'koshka','0','koshka',1,NULL),(29,'2020-12-31',0,NULL,'Новогодний',NULL,'michael','0',NULL,1,NULL),(30,'2020-12-31',0,NULL,'Аптека',NULL,'michael','0',NULL,1,NULL),(31,'2020-12-31',0,NULL,'В дорогу',NULL,'michael','0',NULL,1,NULL);
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_item`
--

DROP TABLE IF EXISTS `purchase_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int DEFAULT NULL,
  `checked` tinyint(1) DEFAULT NULL,
  `checked_date` date DEFAULT NULL,
  `item_name` varchar(1000) DEFAULT NULL,
  `item_description` varchar(2000) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `ord` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_fk` (`purchase_id`),
  CONSTRAINT `purchase_fk` FOREIGN KEY (`purchase_id`) REFERENCES `purchase` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_item`
--

LOCK TABLES `purchase_item` WRITE;
/*!40000 ALTER TABLE `purchase_item` DISABLE KEYS */;
INSERT INTO `purchase_item` VALUES (31,NULL,1,'2020-12-19','Шпеньки',NULL,1,31),(32,NULL,1,'2020-12-19','Клей пва',NULL,1,32),(33,14,0,NULL,'Мебельный щит 30х80х2см 6 шт',NULL,1,33),(44,NULL,1,'2020-12-19','Фиксатор для балкона',NULL,1,44),(45,14,0,NULL,'Сдать ламинат',NULL,1,45),(46,NULL,0,NULL,'Морилка??? ',NULL,1,46),(47,NULL,1,'2020-12-19','Герметик для балкона',NULL,1,47),(48,NULL,1,'2020-12-19','Кисточка для морилки 2шт.',NULL,1,48),(49,NULL,1,'2020-12-19','Подоконник белый 200х15см 6м',NULL,1,49),(50,NULL,1,'2020-12-19','Пистолет для монтажной пены',NULL,1,50),(51,NULL,1,'2020-12-19','Пена монтажная х2',NULL,1,51),(52,14,0,NULL,'Белый скотч 2шт',NULL,1,52),(53,NULL,1,'2020-12-19','Уголки декоративные белые',NULL,1,53),(54,NULL,1,'2020-12-19','Ограничитель для балкона',NULL,1,54),(55,NULL,1,'2020-12-19','Уголки мебельные 6шт',NULL,1,55),(56,NULL,1,'2020-12-19','Уголок для подвеса 2шт',NULL,1,56),(57,NULL,1,'2020-12-19','Палки боковые 105х10х2 4шт',NULL,1,57),(58,NULL,1,'2020-12-19','Палки соединительные 2х3 4м',NULL,1,58),(59,NULL,1,'2020-12-19','Саморезы 6см ',NULL,1,59),(61,NULL,1,'2020-12-17','Хлеб',NULL,1,61),(62,NULL,1,'2020-12-19','Котлетки ',NULL,1,62),(63,NULL,1,'2020-12-17','Сметана',NULL,1,63),(64,NULL,1,'2020-12-19','Блинчики для Пети ',NULL,1,64),(65,23,1,'2021-01-01','Таблетки для посудомойки ',NULL,1,65),(66,23,0,NULL,'Порошок стир взр',NULL,1,66),(67,NULL,0,NULL,'Ср-во для стирки шерсти',NULL,1,67),(68,NULL,1,'2020-12-19','Актимель',NULL,1,68),(69,NULL,1,'2020-12-19','Агуша',NULL,1,69),(70,NULL,1,'2020-12-17','Тортик',NULL,1,70),(71,NULL,1,'2020-12-19','Колбаса вареная',NULL,1,71),(72,NULL,1,'2020-12-17','Яйца',NULL,1,72),(73,NULL,1,'2020-12-17','Фрукты',NULL,1,73),(74,NULL,1,'2020-12-19','Контейнер для лего',NULL,1,74),(75,24,1,'2020-12-19','Помидоры',NULL,1,75),(76,24,1,'2020-12-19','Салат',NULL,1,76),(77,24,1,'2020-12-19','Сербский сыр (зеленая банка) - 2 шт',NULL,1,77),(78,24,1,'2020-12-19','Огурцы',NULL,1,78),(79,24,1,'2020-12-19','Котлеты',NULL,1,79),(80,24,1,'2020-12-19','Перец красный',NULL,1,80),(81,24,1,'2020-12-19','Колбаса / окорок/буженина',NULL,1,81),(82,NULL,0,NULL,'Сахар трост',NULL,1,82),(83,22,1,'2020-12-29','Чай пакет',NULL,1,83),(84,22,1,'2020-12-29','Кофе раств',NULL,1,84),(85,14,0,NULL,'Палки боковые 105х10х15 4шт',NULL,1,85),(86,14,0,NULL,'Уголок для полок Нижний 2шт',NULL,1,86),(87,14,0,NULL,'Уголки мебельные 15шт',NULL,1,87),(99,NULL,1,'2020-12-26','Картошка - 3кг',NULL,1,99),(100,NULL,1,'2020-12-26','Морковь - 1 кг',NULL,1,100),(101,28,1,'2020-12-29','Икра красная',NULL,1,101),(102,28,1,'2020-12-30','Мандарины ',NULL,1,102),(103,NULL,1,'2020-12-26','Сыр голландский - 500гр.',NULL,1,103),(104,NULL,1,'2020-12-26','Шампанское Лев Голицын - 2шт',NULL,1,104),(105,28,1,'2020-12-30','Оливки из Мяснова',NULL,1,105),(106,NULL,1,'2020-12-26','Сыр для еды',NULL,1,106),(107,NULL,1,'2020-12-26','Отбивные - 12шт',NULL,1,107),(108,NULL,1,'2020-12-26','Коньяк',NULL,1,108),(109,NULL,1,'2020-12-26','Рыба красная',NULL,1,109),(110,NULL,1,'2020-12-26','Яйца',NULL,1,110),(111,28,1,'2020-12-30','Майонез большой',NULL,1,111),(112,NULL,1,'2020-12-26','Креветки ',NULL,1,112),(113,NULL,1,'2020-12-26','Лук - 1 кг',NULL,1,113),(114,NULL,1,'2020-12-28','Что-то в банке для ножа',NULL,1,114),(115,NULL,1,'2020-12-26','Сметана бел.лавка',NULL,1,115),(116,NULL,1,'2020-12-26','Творог из бел.лавки',NULL,1,116),(117,NULL,1,'2020-12-26','Лапшу',NULL,1,117),(118,22,1,'2020-12-30','Авокадо',NULL,1,89),(119,22,1,'2020-12-29','Молоко',NULL,1,85),(120,22,1,'2020-12-30','Сбринц',NULL,1,87),(121,22,1,'2020-12-30','Батон',NULL,1,86),(122,22,1,'2020-12-30','Майонез ',NULL,1,88),(123,23,0,NULL,'Резиновые перчатки',NULL,1,68),(124,23,1,'2020-12-29','Кондиционер для белья ',NULL,1,67),(125,28,1,'2020-12-30','Сбринц',NULL,1,122),(126,28,1,'2020-12-30','Руккола',NULL,1,120),(127,28,1,'2020-12-30','Вино белое',NULL,1,118),(128,28,1,'2020-12-30','Нарезка/колбаса',NULL,1,124),(129,28,0,NULL,'Хлеб',NULL,1,121),(130,28,1,'2020-12-30','Авокадо',NULL,1,119),(131,28,1,'2020-12-30','Сыр с плесенью',NULL,1,123),(132,28,1,'2020-12-30','Лимон ',NULL,1,125),(133,28,1,'2020-12-29','Ананас',NULL,1,126),(134,28,1,'2020-12-30','Виноград',NULL,1,127),(135,28,1,'2020-12-30','Помидоры черри',NULL,1,128),(136,28,1,'2020-12-30','Салатник ',NULL,1,129),(137,23,0,NULL,'Ватные диски',NULL,1,69),(138,29,1,'2020-12-31','Хлеб порезаный',NULL,1,2),(139,29,1,'2020-12-31','Таблетки для посудомойки',NULL,1,1),(140,29,1,'2020-12-31','Рафаэлки',NULL,1,3),(141,30,1,'2020-12-31','Тримедат 100мг',NULL,1,1),(142,30,1,'2021-01-01','Примадофилус реутери (банка) ',NULL,1,2),(143,29,1,'2020-12-31','Майонез',NULL,1,4),(144,31,1,'2021-01-01','Квадрокоптер ',NULL,1,1),(145,31,1,'2021-01-02','Резиновая латка',NULL,1,2),(146,31,1,'2021-01-01','Ноутбук',NULL,1,3),(147,23,0,NULL,'Салфетки влажные',NULL,1,70),(148,31,1,'2021-01-01','Камеры',NULL,1,4),(149,31,1,'2021-01-01','Селфи-палки',NULL,1,5),(150,31,1,'2021-01-01','Трусы-носки',NULL,1,6),(151,31,1,'2021-01-01','Рабочие штаны',NULL,1,7),(152,31,1,'2021-01-01','Французский',NULL,1,8),(153,31,1,'2021-01-02','Ботинки для машины',NULL,1,10),(154,31,1,'2021-01-01','Трэкинговые ботинки',NULL,1,9),(155,31,1,'2021-01-01','Модем',NULL,1,11),(156,31,1,'2021-01-01','Зарядки для девайсов',NULL,1,12);
/*!40000 ALTER TABLE `purchase_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_template`
--

DROP TABLE IF EXISTS `purchase_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_template` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `text` varchar(2000) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_template`
--

LOCK TABLES `purchase_template` WRITE;
/*!40000 ALTER TABLE `purchase_template` DISABLE KEYS */;
INSERT INTO `purchase_template` VALUES (2,'Мяснов',NULL,'michael'),(3,'Нннннн',NULL,'koshka');
/*!40000 ALTER TABLE `purchase_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_template_item`
--

DROP TABLE IF EXISTS `purchase_template_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_template_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `purchase_template_id` int DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_description` varchar(2000) DEFAULT NULL,
  `ord` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_template_item_FK` (`purchase_template_id`),
  CONSTRAINT `purchase_template_item_FK` FOREIGN KEY (`purchase_template_id`) REFERENCES `purchase_template` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_template_item`
--

LOCK TABLES `purchase_template_item` WRITE;
/*!40000 ALTER TABLE `purchase_template_item` DISABLE KEYS */;
INSERT INTO `purchase_template_item` VALUES (1,2,'Сметана',NULL,1),(2,2,'Бифилайф',NULL,2),(3,2,'Volfas Engelman',NULL,3),(4,2,'Рулеты куриные',NULL,4),(5,3,'44666',NULL,5);
/*!40000 ALTER TABLE `purchase_template_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_version`
--

DROP TABLE IF EXISTS `schema_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schema_version` (
  `installed_rank` int NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `schema_version_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_version`
--

LOCK TABLES `schema_version` WRITE;
/*!40000 ALTER TABLE `schema_version` DISABLE KEYS */;
INSERT INTO `schema_version` VALUES (1,'1','<< Flyway Baseline >>','BASELINE','<< Flyway Baseline >>',NULL,'root','2020-12-23 11:59:24',0,1),(2,'1.0.1','baseline','SQL','V1.0.1__baseline.sql',-495389245,'root','2020-12-23 11:59:24',409,1),(3,'1.0.2','add ord to item','SQL','V1.0.2__add_ord_to_item.sql',-1987341223,'root','2020-12-26 11:29:12',60,1);
/*!40000 ALTER TABLE `schema_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `fio` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `api_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('koshka','Евгения Корсакова','$2a$10$f1uXp9qqyH6TqqG1jHdc3OR2ffwQD8AQjklY5.1XURHPRW/6N7Q..',NULL),('michael','Михаил Вершков ','$2a$10$GALHQP5329UMPuAhwNdJV.2WAmwLt7RApsKZ5agPBF8wpJ.MY6fWq','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWNoYWVsIiwiaWF0IjoxNjA4NzM3MzY4fQ.5xE2YX-VPbKIxmS7QCJurh3eoOfTlD7jFAC1j3dX5G3jTwzesqFeq6N_EZ8MF1KYmZ55vePI3N1A2sZdqH1VAg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `fio` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-03  8:44:31
