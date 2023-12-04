CREATE DATABASE db_users;

CREATE TABLE tb_users (
    id int,
    name VARCHAR(255),
    email VARCHAR(255),
    cpf  VARCHAR(255),
    endereco VARCHAR(255)
);

INSERT INTO tb_users 
VALUES (1,"Elias","eliasneto00@gmail.com","2432452523","Rua aleatoria");