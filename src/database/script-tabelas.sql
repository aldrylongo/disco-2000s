CREATE DATABASE disco;
USE disco;

CREATE TABLE usuarios(
idUser INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
dtNascimento DATE,
senha VARCHAR(45),
dtCadastro DATETIME default now()
);

CREATE TABLE post(
idPost INT AUTO_INCREMENT,
descricao VARCHAR(500),
fk_idUser INT,
foreign key (fk_idUser) references usuarios (idUser),
primary key (idPost, fk_idUser)
);

select * from usuarios;

select truncate(datediff(now(), dtNascimento) / 365,0) as idade from usuarios;


    alter table usuarios add column geracoes varchar(20) constraint chk_geracoes check (geracoes = 'Boomers' or geracoes = 'Millenial' or geracoes = 'Geração Z');
    
    desc usuarios;

   
   select truncate(datediff(now(), dtNascimento) / 365,0) as idade, 
	case 
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 41 and truncate(datediff(now(), dtNascimento) / 365,0) <= 100 then "Boomers"
	when truncate(datediff(now(), dtNascimento) / 365,0) >= 25 and truncate(datediff(now(), dtNascimento) / 365,0) <= 40 then "Millenial"
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 15 and truncate(datediff(now(), dtNascimento) / 365,0) <= 24 then "Geração Z"
    else 0 end as Geração from usuarios;
    
    update usuarios set geracoes = 
	case 
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 41 and truncate(datediff(now(), dtNascimento) / 365,0) <= 100 then "Boomers"
	when truncate(datediff(now(), dtNascimento) / 365,0) >= 25 and truncate(datediff(now(), dtNascimento) / 365,0) <= 40 then "Millenial"
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 15 and truncate(datediff(now(), dtNascimento) / 365,0) <= 24 then "Geração Z"
    else 0 end;
    
    select * from usuarios;
    
    select geracoes, count(geracoes) from usuarios group by geracoes;