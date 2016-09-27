CREATE SCHEMA `information_cart` ;

CREATE TABLE `information_cart`.`person_table` (
  `personid` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(100) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  `img_path` VARCHAR(45) NULL,
  PRIMARY KEY (`personid`));
  
INSERT INTO `information_cart`.`person_table` (`firstName`, `lastName`, `address`, `phoneNumber`, `img_path`) VALUES ('fawzi', 'chabou', '17 colnel lotfi Tebessa', '503-695-8745', '/images/1.jpg');
INSERT INTO `information_cart`.`person_table` (`firstName`, `lastName`, `address`, `phoneNumber`, `img_path`) VALUES ('soufiane', 'bouteraa', '28th blvd main street', '506-895-6532', '/images/2.jpg');
INSERT INTO `information_cart`.`person_table` (`firstName`, `lastName`, `address`, `phoneNumber`, `img_path`) VALUES ('hamid ', 'chabouni', '2nd center tiaret', '907-586-5693', '/images/3');
INSERT INTO `information_cart`.`person_table` (`firstName`, `lastName`, `address`, `phoneNumber`, `img_path`) VALUES ('mabrouk', 'habri', '4304 rainier street irving', '817-896-5321', '/images/4.jpg');
INSERT INTO `information_cart`.`person_table` (`firstName`, `lastName`, `address`, `phoneNumber`, `img_path`) VALUES ('kamal', 'taftaf', '74th street bedford', '817-985-4123', '/images/5.jpg');