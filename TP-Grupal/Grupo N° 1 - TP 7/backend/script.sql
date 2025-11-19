DROP DATABASE IF EXISTS gimnasio;
CREATE DATABASE gimnasio;
USE gimnasio;

-- Tabla socios (ya con password de una vez)
CREATE TABLE socios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'cliente') DEFAULT 'cliente'
);

-- Tabla actividades
CREATE TABLE actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_socio INT NOT NULL,
    id_actividad INT NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (id_socio) REFERENCES socios(id) ON DELETE CASCADE,
    FOREIGN KEY (id_actividad) REFERENCES actividades(id) ON DELETE CASCADE
);

-- Socios de ejemplo (YA con password)
INSERT INTO socios (nombre, apellido, email, password, rol) VALUES
('Admin', 'Principal', 'admin@gym.com', 'admin', 'admin'),
('Juan',  'Pérez',    'juanp@example.com', '1234', 'cliente');

-- Actividades de ejemplo
INSERT INTO actividades (nombre, descripcion) VALUES
('Yoga', 'Clase de yoga relajante'),
('Spinning', 'Clase de spinning intensa');

-- Reservas de ejemplo
INSERT INTO reservas (id_socio, id_actividad, fecha) VALUES
(2, 1, '2025-11-20 10:00:00'),
(2, 2, '2025-11-21 18:00:00');
