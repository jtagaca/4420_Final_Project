-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: jtagacasqlserver2.mysql.database.azure.com    Database: games
-- ------------------------------------------------------
-- Server version	5.7.41-log

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
-- Temporary view structure for view `top_10_most_helpful_reviews`
--

DROP TABLE IF EXISTS `top_10_most_helpful_reviews`;
/*!50001 DROP VIEW IF EXISTS `top_10_most_helpful_reviews`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `top_10_most_helpful_reviews` AS SELECT 
 1 AS `review_id`,
 1 AS `game_title`,
 1 AS `helpful`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `top_10_games_by_positive_feedback_ratio`
--

DROP TABLE IF EXISTS `top_10_games_by_positive_feedback_ratio`;
/*!50001 DROP VIEW IF EXISTS `top_10_games_by_positive_feedback_ratio`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `top_10_games_by_positive_feedback_ratio` AS SELECT 
 1 AS `title`,
 1 AS `positive_ratio`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `top_10_games_by_hours_played`
--

DROP TABLE IF EXISTS `top_10_games_by_hours_played`;
/*!50001 DROP VIEW IF EXISTS `top_10_games_by_hours_played`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `top_10_games_by_hours_played` AS SELECT 
 1 AS `title`,
 1 AS `total_hours_played`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `top_10_users_by_products_owned`
--

DROP TABLE IF EXISTS `top_10_users_by_products_owned`;
/*!50001 DROP VIEW IF EXISTS `top_10_users_by_products_owned`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `top_10_users_by_products_owned` AS SELECT 
 1 AS `user_id`,
 1 AS `products`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `top_10_games_by_user_reviews`
--

DROP TABLE IF EXISTS `top_10_games_by_user_reviews`;
/*!50001 DROP VIEW IF EXISTS `top_10_games_by_user_reviews`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `top_10_games_by_user_reviews` AS SELECT 
 1 AS `title`,
 1 AS `user_reviews`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `top_10_most_helpful_reviews`
--

/*!50001 DROP VIEW IF EXISTS `top_10_most_helpful_reviews`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jtagaca`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `top_10_most_helpful_reviews` AS select `recommendations`.`review_id` AS `review_id`,`games`.`title` AS `game_title`,`recommendations`.`helpful` AS `helpful` from (`recommendations` join `games` on((`recommendations`.`app_id` = `games`.`app_id`))) order by `recommendations`.`helpful` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `top_10_games_by_positive_feedback_ratio`
--

/*!50001 DROP VIEW IF EXISTS `top_10_games_by_positive_feedback_ratio`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jtagaca`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `top_10_games_by_positive_feedback_ratio` AS select `games`.`title` AS `title`,`games`.`positive_ratio` AS `positive_ratio` from `games` order by `games`.`positive_ratio` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `top_10_games_by_hours_played`
--

/*!50001 DROP VIEW IF EXISTS `top_10_games_by_hours_played`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jtagaca`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `top_10_games_by_hours_played` AS select `g`.`title` AS `title`,sum(`r`.`hours`) AS `total_hours_played` from (`games` `g` join `recommendations` `r` on((`g`.`app_id` = `r`.`app_id`))) group by `g`.`title` order by `total_hours_played` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `top_10_users_by_products_owned`
--

/*!50001 DROP VIEW IF EXISTS `top_10_users_by_products_owned`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jtagaca`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `top_10_users_by_products_owned` AS select `users`.`user_id` AS `user_id`,`users`.`products` AS `products` from `users` order by `users`.`products` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `top_10_games_by_user_reviews`
--

/*!50001 DROP VIEW IF EXISTS `top_10_games_by_user_reviews`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jtagaca`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `top_10_games_by_user_reviews` AS select `games`.`title` AS `title`,`games`.`user_reviews` AS `user_reviews` from `games` order by `games`.`user_reviews` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 11:26:37
