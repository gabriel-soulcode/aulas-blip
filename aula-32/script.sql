
CREATE DATABASE IF NOT EXISTS aulas_blip;

-- DROP DATABASE aulas_blip;

SHOW DATABASES;

USE aulas_blip;

CREATE TABLE IF NOT EXISTS alunos (
	id INT AUTO_INCREMENT PRIMARY KEY,
	matricula INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    peso FLOAT DEFAULT 0
);

DESCRIBE alunos;

SHOW TABLES;

DROP TABLE alunos;

INSERT INTO alunos VALUES (1, 123, "João", "1999-01-01", 80);

INSERT INTO alunos
	(matricula, nome, data_nascimento)
VALUES
	(125, "Maria", "1995-03-01"),
    (126, "Caio", "1998-04-01"),
    (127, "Jonas", "1997-06-01"),
    (128, "Davi", "2000-02-01");
    
INSERT INTO alunos (matricula, nome) VALUES (128, "Clara");

SELECT id, matricula, nome, data_nascimento, peso FROM alunos;

SELECT * FROM alunos ORDER BY data_nascimento DESC;

SELECT * FROM alunos ORDER BY nome LIMIT 5;

SELECT * FROM alunos ORDER BY data_nascimento DESC LIMIT 1;

SELECT * FROM alunos;

UPDATE alunos SET peso = 83, data_nascimento = "1996-04-01" WHERE id = 4;

DELETE FROM alunos WHERE id = 5;

SELECT
	nome AS nome_aluno,
    matricula AS matricula_aluno,
    peso * 2.2 AS peso_libras
FROM alunos;

-- Crie uma tabela chamada cursos com os seguintes campos:
-- id (inteiro, chave primária e auto incremento)
-- nome (texto, obrigatório)
-- carga_horaria (inteiro, obrigatório)
-- modalidade (texto, podendo armazenar “Presencial” ou “Online”)

CREATE TABLE IF NOT EXISTS cursos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    carga_horaria INT NOT NULL,
    modalidade ENUM("Presencial", "Online") DEFAULT "Presencial"
);

DESCRIBE cursos;

-- Insira pelo menos 10 registros na tabela cursos, com dados variados.

INSERT INTO cursos (nome, carga_horaria, modalidade) VALUES
("Curso de Programação com Node.js", 200, "Online"),
("Curso de Arquitetura de Computadores", 300, "Presencial"),
("Curso de Banco de Dados com MySQL", 180, "Online"),
("Curso de Desenvolvimento Web com React", 220, "Online"),
("Curso de Lógica de Programação", 150, "Presencial"),
("Curso de Python para Iniciantes", 200, "Online"),
("Curso de Redes de Computadores", 240, "Presencial"),
("Curso de Segurança da Informação", 260, "Online"),
("Curso de Análise de Sistemas", 320, "Presencial"),
("Curso de Inteligência Artificial com Python", 280, "Online");

-- Exiba todos os cursos cadastrados.

SELECT * FROM cursos;

-- Exiba apenas os cursos por ordem de nome.

SELECT * FROM cursos ORDER BY nome;

-- Liste todos os cursos em ordem decrescente de carga horária.

SELECT * FROM cursos ORDER BY carga_horaria DESC;

-- Liste o nome e a carga horária dos cursos, exibindo os cabeçalhos das colunas como:
-- Curso e Duração (h)

SELECT nome AS curso, carga_horaria AS duracao FROM cursos;

-- Atualize a carga horária de um curso específico (escolhido por você) para um novo valor.

UPDATE cursos SET carga_horaria = 220 WHERE id = 3;

-- Exiba o curso com maior carga horária.

SELECT * FROM cursos ORDER BY carga_horaria DESC LIMIT 1;

-- Exclua um curso com base no id.

DELETE FROM cursos WHERE id = 7;
