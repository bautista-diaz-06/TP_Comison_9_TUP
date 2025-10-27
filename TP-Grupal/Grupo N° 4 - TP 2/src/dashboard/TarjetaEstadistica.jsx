import React from 'react';

export default function TarjetaEstadistica({ titulo, valor }) {
  const style = {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '1rem',
    minWidth: '150px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div style={style}>
      <h3>{titulo}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{valor}</p>
    </div>
  );
}
