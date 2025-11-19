CREATE DATABASE IF NOT EXISTS gimnasio;
USE gimnasio;

-- Tabla socios
CREATE TABLE IF NOT EXISTS socios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    rol ENUM('admin', 'cliente') DEFAULT 'cliente'
);

-- Tabla actividades
CREATE TABLE IF NOT EXISTS actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla reservas
CREATE TABLE IF NOT EXISTS reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_socio INT NOT NULL,
    id_actividad INT NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (id_socio) REFERENCES socios(id) ON DELETE CASCADE,
    FOREIGN KEY (id_actividad) REFERENCES actividades(id) ON DELETE CASCADE
);

-- Datos de ejemplo
INSERT INTO socios (nombre, apellido, email, rol) VALUES
('Admin', 'Principal', 'admin@gym.com', 'admin'),
('Juan', 'Pérez', 'juanp@example.com', 'cliente');

INSERT INTO actividades (nombre, descripcion) VALUES
('Yoga', 'Clase de yoga relajante'),
('Spinning', 'Clase de spinning intensa');

INSERT INTO reservas (id_socio, id_actividad, fecha) VALUES
(2, 1, '2025-11-20 10:00:00'),
(2, 2, '2025-11-21 18:00:00');
ALTER TABLE socios
ADD COLUMN password VARCHAR(255) NOT NULL AFTER email;
INSERT INTO socios (nombre, apellido, email, password, rol) VALUES
('Admin', 'Principal', 'admin@gym.com', 'admin', 'admin'),
('Juan', 'Pérez', 'juanp@example.com', '1234', 'cliente');
DELETE FROM socios WHERE email IN ('admin@gym.com', 'juanp@example.com');

INSERT INTO socios (nombre, apellido, email, password, rol) VALUES
('Admin', 'Principal', 'admin@gym.com', 'admin', 'admin'),
('Juan', 'Pérez', 'juanp@example.com', '1234', 'cliente');