CREATE DATABASE IF NOT EXISTS gimnasio;
USE gimnasio;

-- Tabla de usuarios
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol VARCHAR(50) DEFAULT 'cliente'
);

-- Tabla de socios
CREATE TABLE socios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  telefono VARCHAR(20),
  fecha_nacimiento DATE,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de actividades
CREATE TABLE actividades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  duracion INT, -- en minutos
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de reservas
CREATE TABLE reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  socio_id INT NOT NULL,
  clase_id INT NOT NULL,
  fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado VARCHAR(20) DEFAULT 'pendiente',
  FOREIGN KEY (socio_id) REFERENCES socios(id)
  -- clase_id se puede relacionar con actividades si lo deseas
);

-- (Opcional) Tabla de membresías
CREATE TABLE membresias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  duracion_dias INT NOT NULL
);

-- Relación entre socios y membresías
ALTER TABLE socios ADD COLUMN membresia_id INT;
ALTER TABLE socios ADD FOREIGN KEY (membresia_id) REFERENCES membresias(id);