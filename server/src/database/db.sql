DROP DATABASE IF EXISTS note;
CREATE DATABASE IF NOT EXISTS note;
USE note;

    CREATE TABLE task(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
        tag VARCHAR(30) NOT NULL,
        description VARCHAR(50) NOT NULL,
        atTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        state BOOLEAN NOT NULL DEFAULT 0,
        category SET('urgente', 'medio', 'espera') NOT NULL DEFAULT 'espera',
        image VARCHAR(10)
    );

        INSERT INTO task(id, tag, description, image) VALUES 
            (1,"Pagar Luz", "Luz de mes: enero, febrero y marzo", CONCAT(id, '.jpg')), 
            (2,"Examen", "Mecánica cuántica", CONCAT(id, '.jpg'));