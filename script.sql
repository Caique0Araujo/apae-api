CREATE DATABASE apae;
USE apae;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    text LONGTEXT NOT NULL,
    image_path VARCHAR(200) NOT NULL,
    created_at_utc DATETIME NOT NULL,
    is_enabled TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE products(
    id_product INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description LONGTEXT NOT NULL,
    price DECIMAL(8, 5) NOT NULL,
    image_path VARCHAR(200) NOT NULL,
    is_enabled TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE donations(
    id_donation INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(45) NOT NULL,
    is_enabled TINYINT(1) NOT NULL DEFAULT 1 
);

CREATE TABLE bazaar_infos(
    id_bazaar_info INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(200) NOT NULL,
    is_enabled TINYINT(1) NOT NULL DEFAULT 1
);