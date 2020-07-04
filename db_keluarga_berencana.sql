-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: db_keluarga_berencana
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `list_kontrasepsi`
--

LOCK TABLES `list_kontrasepsi` WRITE;
/*!40000 ALTER TABLE `list_kontrasepsi` DISABLE KEYS */;
INSERT INTO `list_kontrasepsi` (`id_kontrasepsi`, `nama_kontrasepsi`) VALUES (1,'pil'),(2,'kondom'),(3,'IUD');
/*!40000 ALTER TABLE `list_kontrasepsi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `list_pemakai_kontrasepsi`
--

LOCK TABLES `list_pemakai_kontrasepsi` WRITE;
/*!40000 ALTER TABLE `list_pemakai_kontrasepsi` DISABLE KEYS */;
/*!40000 ALTER TABLE `list_pemakai_kontrasepsi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `list_propinsi`
--

LOCK TABLES `list_propinsi` WRITE;
/*!40000 ALTER TABLE `list_propinsi` DISABLE KEYS */;
INSERT INTO `list_propinsi` (`id_propinsi`, `nama_propinsi`) VALUES (1,'Aceh'),(2,'Sumatera Utara'),(3,'Sumatera Barat'),(4,'Riau'),(5,'Kepulauan Riau'),(6,'Jambi'),(7,'Bangka Belitung'),(8,'Sumatera Selatan'),(9,'Lampung');
/*!40000 ALTER TABLE `list_propinsi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-04 17:37:27
