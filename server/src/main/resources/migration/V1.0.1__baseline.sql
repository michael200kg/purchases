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
-- Table structure for table purchase
--

DROP TABLE IF EXISTS purchase;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE purchase (
  id int NOT NULL AUTO_INCREMENT,
  created_date date DEFAULT NULL,
  checked tinyint(1) DEFAULT NULL,
  checked_date date DEFAULT NULL,
  name varchar(1000) DEFAULT NULL,
  text varchar(2000) DEFAULT NULL,
  username varchar(255) DEFAULT NULL,
  shared char(1) DEFAULT NULL,
  shared_for_username varchar(255) DEFAULT NULL,
  active tinyint(1) NOT NULL DEFAULT '1',
  purchase_template_id int DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table purchase
--

LOCK TABLES purchase WRITE;
/*!40000 ALTER TABLE purchase DISABLE KEYS */;
INSERT INTO purchase VALUES (14,'2020-12-08',0,NULL,'Леруа Мерлен',NULL,'michael','0','michael',1,NULL),(22,'2020-12-15',0,NULL,'Повседневное',NULL,'koshka','0','koshka',1,NULL),(23,'2020-12-15',0,NULL,'Бытовая химия',NULL,'koshka','0','koshka',1,NULL),(24,'2020-12-19',0,NULL,'Славич',NULL,'koshka','0','koshka',1,NULL);
/*!40000 ALTER TABLE purchase ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table purchase_item
--

DROP TABLE IF EXISTS purchase_item;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE purchase_item (
  id int NOT NULL AUTO_INCREMENT,
  purchase_id int DEFAULT NULL,
  checked tinyint(1) DEFAULT NULL,
  checked_date date DEFAULT NULL,
  item_name varchar(1000) DEFAULT NULL,
  item_description varchar(2000) DEFAULT NULL,
  active tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id),
  KEY purchase_fk (purchase_id),
  CONSTRAINT purchase_fk FOREIGN KEY (purchase_id) REFERENCES purchase (id)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table purchase_item
--

LOCK TABLES purchase_item WRITE;
/*!40000 ALTER TABLE purchase_item DISABLE KEYS */;
INSERT INTO purchase_item VALUES (31,NULL,1,'2020-12-19','Шпеньки',NULL,1),(32,NULL,1,'2020-12-19','Клей пва',NULL,1),(33,14,0,NULL,'Мебельный щит 30х80х2см 6 шт',NULL,1),(44,NULL,1,'2020-12-19','Фиксатор для балкона',NULL,1),(45,14,0,NULL,'Сдать ламинат',NULL,1),(46,NULL,0,NULL,'Морилка??? ',NULL,1),(47,NULL,1,'2020-12-19','Герметик для балкона',NULL,1),(48,NULL,1,'2020-12-19','Кисточка для морилки 2шт.',NULL,1),(49,NULL,1,'2020-12-19','Подоконник белый 200х15см 6м',NULL,1),(50,NULL,1,'2020-12-19','Пистолет для монтажной пены',NULL,1),(51,NULL,1,'2020-12-19','Пена монтажная х2',NULL,1),(52,14,0,NULL,'Белый скотч 2шт',NULL,1),(53,NULL,1,'2020-12-19','Уголки декоративные белые',NULL,1),(54,NULL,1,'2020-12-19','Ограничитель для балкона',NULL,1),(55,NULL,1,'2020-12-19','Уголки мебельные 6шт',NULL,1),(56,NULL,1,'2020-12-19','Уголок для подвеса 2шт',NULL,1),(57,NULL,1,'2020-12-19','Палки боковые 105х10х2 4шт',NULL,1),(58,NULL,1,'2020-12-19','Палки соединительные 2х3 4м',NULL,1),(59,NULL,1,'2020-12-19','Саморезы 6см ',NULL,1),(61,NULL,1,'2020-12-17','Хлеб',NULL,1),(62,22,1,'2020-12-19','Котлетки ',NULL,1),(63,NULL,1,'2020-12-17','Сметана',NULL,1),(64,NULL,1,'2020-12-19','Блинчики для Пети ',NULL,1),(65,23,0,NULL,'Таблетки для посудомойки ',NULL,1),(66,23,0,NULL,'Порошок стир взр',NULL,1),(67,23,0,NULL,'Ср-во для стирки шерсти',NULL,1),(68,NULL,1,'2020-12-19','Актимель',NULL,1),(69,NULL,1,'2020-12-19','Агуша',NULL,1),(70,NULL,1,'2020-12-17','Тортик',NULL,1),(71,NULL,1,'2020-12-19','Колбаса вареная',NULL,1),(72,NULL,1,'2020-12-17','Яйца',NULL,1),(73,NULL,1,'2020-12-17','Фрукты',NULL,1),(74,NULL,1,'2020-12-19','Контейнер для лего',NULL,1),(75,24,1,'2020-12-19','Помидоры',NULL,1),(76,24,1,'2020-12-19','Салат',NULL,1),(77,24,1,'2020-12-19','Сербский сыр (зеленая банка) - 2 шт',NULL,1),(78,24,1,'2020-12-19','Огурцы',NULL,1),(79,24,1,'2020-12-19','Котлеты',NULL,1),(80,24,1,'2020-12-19','Перец красный',NULL,1),(81,24,1,'2020-12-19','Колбаса / окорок/буженина',NULL,1),(82,22,0,NULL,'Сахар трост',NULL,1),(83,22,0,NULL,'Чай',NULL,1),(84,22,0,NULL,'Кофе зерн',NULL,1),(85,14,0,NULL,'Палки боковые 105х10х15 4шт',NULL,1),(86,14,0,NULL,'Уголок для полок Нижний 2шт',NULL,1),(87,14,0,NULL,'Уголки мебельные 15шт',NULL,1);
/*!40000 ALTER TABLE purchase_item ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table purchase_template
--

DROP TABLE IF EXISTS purchase_template;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE purchase_template (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  text varchar(2000) DEFAULT NULL,
  username varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table purchase_template
--

LOCK TABLES purchase_template WRITE;
/*!40000 ALTER TABLE purchase_template DISABLE KEYS */;
INSERT INTO purchase_template VALUES (2,'Мяснов',NULL,'michael');
/*!40000 ALTER TABLE purchase_template ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table purchase_template_item
--

DROP TABLE IF EXISTS purchase_template_item;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE purchase_template_item (
  id int NOT NULL AUTO_INCREMENT,
  purchase_template_id int DEFAULT NULL,
  item_name varchar(255) NOT NULL,
  item_description varchar(2000) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY purchase_template_item_FK (purchase_template_id),
  CONSTRAINT purchase_template_item_FK FOREIGN KEY (purchase_template_id) REFERENCES purchase_template (id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table purchase_template_item
--

LOCK TABLES purchase_template_item WRITE;
/*!40000 ALTER TABLE purchase_template_item DISABLE KEYS */;
INSERT INTO purchase_template_item VALUES (1,2,'Сметана',NULL),(2,2,'Бифилайф',NULL),(3,2,'Volfas Engelman',NULL),(4,2,'Рулеты куриные',NULL);
/*!40000 ALTER TABLE purchase_template_item ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table user
--

DROP TABLE IF EXISTS user;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE user (
  username varchar(100) NOT NULL,
  fio varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  api_key varchar(255) DEFAULT NULL,
  PRIMARY KEY (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table user
--

LOCK TABLES user WRITE;
/*!40000 ALTER TABLE user DISABLE KEYS */;
INSERT INTO user VALUES ('koshka','Евгения Корсакова','$2a$10$f1uXp9qqyH6TqqG1jHdc3OR2ffwQD8AQjklY5.1XURHPRW/6N7Q..',NULL),('michael','Michael Vershkov','$2a$10$GALHQP5329UMPuAhwNdJV.2WAmwLt7RApsKZ5agPBF8wpJ.MY6fWq','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWNoYWVsIiwiaWF0IjoxNjA4MTEzMTkxfQ.HJMD0uDnqY0y8geKDvDu0xx2iGBbvaqcsRRDdWyGKsTmP0xDVP6aZDJl1D5rMvQ1Y4mOZGVQKgwabO2KDVJ_WQ');
/*!40000 ALTER TABLE user ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table users
--

DROP TABLE IF EXISTS users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE users (
  username varchar(100) NOT NULL,
  fio varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table users
--

LOCK TABLES users WRITE;
/*!40000 ALTER TABLE users DISABLE KEYS */;
/*!40000 ALTER TABLE users ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-23 11:40:39
