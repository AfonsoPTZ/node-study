create database projeto_node;

use projeto_node;

create table usuarios(
	id int primary key auto_increment,
    name varchar(50) not null unique,
    cpf varchar(50) not null unique,
    telefone varchar(50) not null unique
    );
    