-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-03-2020 a las 21:06:05
-- Versión del servidor: 5.7.21
-- Versión de PHP: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_traductor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terminos`
--

DROP TABLE IF EXISTS `terminos`;
CREATE TABLE IF NOT EXISTS `terminos` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del término o palabra ingresado al traductor',
  `t_gnabere` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Término en gnabere',
  `t_espanol` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Término en español',
  `texto_espanol` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'Oración en español creada emplenado el término gnabere',
  `texto_gnabere` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'Oración creada emplenado el término gnabere',
  `url_audio` varchar(256) COLLATE utf8_unicode_ci NOT NULL COMMENT 'URL donde se encuentra alojado el audio del término en gnabere en caso de que lo hayan adjuntado',
  `url_imagen` varchar(256) COLLATE utf8_unicode_ci NOT NULL COMMENT 'URL de la imagen alusiva al término en gnabere en caso de que la hayan adjuntado',
  `id_usuario` int(64) NOT NULL COMMENT 'Id del usuario que subió el término a la base de datos',
  `vistas` int(255) NOT NULL DEFAULT '0' COMMENT 'Cantidad de vistas de un término',
  `me_gusta` int(255) NOT NULL DEFAULT '0' COMMENT 'Cantidad de "me gusta" de un término',
  `no_me_gusta` int(255) NOT NULL DEFAULT '0' COMMENT 'Cantidad de "no me gusta" de un término',
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha en la que fue agregado o editado un término del traductor',
  `borrado` tinyint(4) NOT NULL COMMENT 'Indicador de borrado',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `terminos`
--

INSERT INTO `terminos` (`id`, `t_gnabere`, `t_espanol`, `texto_espanol`, `texto_gnabere`, `url_audio`, `url_imagen`, `id_usuario`, `vistas`, `me_gusta`, `no_me_gusta`, `fecha`, `borrado`) VALUES
(1, 'Andalán', 'Gallo', 'Mi gallo', 'Andalan tigwe', 'prueba.mp3', 'gallo.jpg', 1, 0, 1, 0, '2020-02-27 17:17:09', 0),
(4, 'Baran', 'Banano', 'Comamos ese banano maduro', 'Baran tain ye kwete ', 'prueba.mp3', 'banano.jpg', 1, 0, 0, 0, '2020-02-27 20:35:31', 0),
(5, 'Chogali', 'Diablo', 'El diablo es malo', 'Chogwäli ye käme', 'prueba.mp3', 'diablo.jpg', 1, 0, 0, 0, '2020-02-27 20:35:31', 0),
(6, 'Daba', 'Pejiballe', 'Cocine ese pejibaye', 'Deba ye rien', 'prueba.mp3', 'pejibaye.jpg', 1, 0, 0, 0, '2020-03-03 18:46:54', 0),
(7, 'Gü', 'Búho', 'Gü ye ngäne deu', 'El búho canta en la noche', 'prueba.mp3', 'buho.jpg', 0, 0, 0, 0, '2020-03-03 19:52:05', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
