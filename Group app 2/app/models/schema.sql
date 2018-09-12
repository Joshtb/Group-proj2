DROP DATABASE IF EXISTS rpgStore;
CREATE DATABASE rpgStore;
USE rpgStore;
CREATE TABLE players
(
    player_id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
  player_name VARCHAR
    (300),
  health INTEGER
    (100),
  attackLight    INTEGER
    (100),
  attackMed  INTEGER
    (100),
  attackHeavy INTEGER
    (100),
  numLight   INTEGER
    (100),
  numMed     INTEGER
    (100),
  numHeavy INTEGER
    (100),
  gp INTEGER
    (100),
  PRIMARY KEY
    (player_id)
);
    INSERT INTO players
        (player_name, health, attackLight, attackMed, attackHeavy, numLight, numMed, numHeavy, gp)
    VALUES
        ("Andrew", 100, 20, 50, 75, 2, 5, 10, 10000)