import React from 'react';
import './Button.css';

const Button = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className="direction-button">
      {direction }
    </button>
  );
};

export default Button;
