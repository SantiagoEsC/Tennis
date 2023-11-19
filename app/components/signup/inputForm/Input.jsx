import React from 'react';
import './Input.css'; // Ajusta la ruta según la ubicación de tu archivo de estilos

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="inputForm" />;
};

export default Input;