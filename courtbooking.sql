-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2022 at 03:08 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courtbooking`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'adminkuptm@gmail.com', 'admin123'),
(2, 'amirkuptm@gmail.com', 'amir123'),
(3, 'iqbalkuptm@gmail.com', 'iqbal123'),
(4, 'nasuhakuptm@gmail.com', 'nasuha123'),
(5, 'aishkuptm@gmail.com', 'aish123');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL DEFAULT current_timestamp(),
  `reason` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `name`, `date`, `time`, `reason`) VALUES
(1, 'Adam Hafiz', '2022-02-01', '17:34:54', 'Futsal'),
(2, 'Natasya Hassan', '2022-02-04', '13:44:00', 'Badminton'),
(3, 'Sarah Amirah', '2022-02-06', '09:15:28', 'Badminton'),
(4, 'Rizal Hakim', '2022-02-08', '10:27:30', 'Badminton'),
(5, 'Amirul Asyraf', '2022-02-11', '11:55:09', 'Futsal'),
(6, 'Maria Hafiza', '2022-02-13', '18:10:50', 'Volleyball'),
(7, 'Hana Azuah', '2022-02-16', '17:48:22', 'Futsal'),
(8, 'Adam Hafiz', '2022-02-20', '17:33:38', 'Futsal'),
(9, 'Firdaus Ahmad', '2022-02-21', '16:05:24', 'Volleyball'),
(10, 'Najwa Hashim', '2014-03-01', '16:16:41', 'Volleyball');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `email`, `password`) VALUES
(1, 'adam@gmail.com', 'adam123'),
(2, 'tasya@gmail.com', 'tasya123'),
(3, 'sarah@gmail.com', 'sarah123'),
(4, 'rizal@gmail.com', 'rizal123'),
(5, 'amirul@gmail.com', 'amirul123'),
(6, 'maria@gmail.com', 'maria123'),
(7, 'hana@gmail.com', 'hana123'),
(8, 'firdaus@gmail.com', 'firdaus123'),
(9, 'ahmad@gmail.com', 'ahmad123'),
(10, 'najwa@gmail.com', 'najwa123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
