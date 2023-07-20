-- creando la base de datos
CREATE DATABASE crudeNodeMysql;

-- utilizando la base de datos
use crudeNodeMysql; 

-- creando la tabla//ya la creee
CREATE TABLE compradores(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR (100) NOT NULL,
     phone VARCHAR(15)
);

-- para mostrar o ver las tablas escribir el siguiente comando
SHOW TABLES;

-- Para describir la tabla
describe compradores;