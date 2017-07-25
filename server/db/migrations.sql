CREATE DATABASE sittertest1;

\c sittertest1;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  password_digest VARCHAR(255),
  street VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip INT,
  phone INT,
  token INT
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  species VARCHAR(255),
  birthyear INT,
  photo VARCHAR(255),
  notes VARCHAR(255),
  ownerid INT references users(id)
);

CREATE TABLE appointments (
  ID SERIAL PRIMARY KEY,
  date DATE,
  time TIME,
  ownerid INT references users(id),
  petid INT references pets(id),
  sitterid INT references sitters(id),
  service VARCHAR(255),
  notes VARCHAR(255),
  status BOOLEAN
);

CREATE TABLE sitters (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  username VARCHAR(255),
  password_digest VARCHAR(255),
  token VARCHAR(255)
);

INSERT INTO users (firstname, lastname, email, password_digest, phone, street, city, state, zip)
VALUES ('Greg', 'Wilwerding','greg.wilwerding@gmail.com', 'gregory', 312-965-3912, '1727 S. Indiana Ave. Apt 208', 'Chicago', 'IL', 60616);

INSERT INTO pets (name, species, birthyear, photo, notes, ownerid)
VALUES ('Jack', 'cat', 2003, 'http://wonderopolis.org/wp-content/uploads/2015/08/1_9.jpg', 'Friendly cat with no health issues',1);

INSERT INTO sitters (firstname, lastname, username, password_digest) VALUES ('Testsitter', 'McTester', 'sittertest1', 'sittertesting1');
