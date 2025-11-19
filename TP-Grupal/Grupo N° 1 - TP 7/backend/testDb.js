import pool from './config/db.js';

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    console.log('Conexión OK, resultado:', rows);

    // Prueba de insert compatible con la tabla actual
    const [result] = await pool.query(
      'INSERT INTO socios (nombre, apellido, email, password, rol) VALUES (?, ?, ?, ?, ?)',
      ['Test', 'User', 'test@example.com', '1234', 'cliente']
    );
    console.log('Insert OK, ID:', result.insertId);

  } catch (error) {
    console.error('Error en DB:', error);
  }
}

testConnection();

