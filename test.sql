CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age INT,
    email VARCHAR(80) UNIQUE,
    address TEXT
);
SELECT * FROM users;
INSERT INTO users(name,age,email,address) 
VALUES
('jony',22,'1ajonymia321@gmail.com','Narsingdi'),
('Ayub',32,'ayubkhan@gmail.com','Nator'),
('Nila',22,'nilaislam@gmail.com','Chattagram'),
('sayed',25,'sayed@gmail.com','Bagura'),
('Humaira',18,'humairaislam@gmail.com','Feni'),
('Jannat',20,'6ajonymia321@gmail.com','Noakhali'),
('Toha',23,'tohaislam@gmail.com','Kumilla'),
('Oyshi',22,'oyshi@gmail.com','Narsingdi'),
('Rony',26,'ronymia@gmail.com','Narsingdi'),
('Mahi',22,'mahiislam@gmail.com','Dhaka')
;
SELECT * FROM users
WHERE name LIKE 'j%'  OR  name LIKE 'J%' ; -- filter j from starting

SELECT name address FROM users
WHERE address IN('Narsingdi'); -- select only narsigndi
SELECT * FROM users
WHERE id BETWEEN 6 and 10; -- creating a range
INSERT INTO users(name,age,email,address) 
VALUES
('Liton',NULL,'litondas@gmail.com',Null),
('Linkon',34,'linkon@gmail.com',NULL),
('Ridhoy',NULL,'ridhoy@gmail.com','Shylet'),
('Sakib',25,'sakib@gmail.com',Null),
('Akib',30,'akib@gmail.com',NULL);

SELECT * FROM users
WHERE age IS NOT NULL AND address IS NOT NULL;
SELECT MIN(AVG(age)) FROM users; -- average
SELECT MIN(age) FROM users; -- minimum
SELECT MAX(age) FROM users; -- maximum
SELECT COUNT(*) from users; -- count rows
SELECT SUM(age) FROM users; -- summation

ALTER TABLE users
ADD COLUMN hobby VARCHAR(30) NOT NULL DEFAULT 'Coding';

ALTER TABLE users
DROP COLUMN hobby;

SELECT * from users LIMIT 4 OFFSET 4;
SELECT * FROM users;