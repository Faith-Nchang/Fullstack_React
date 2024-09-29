import React from 'react';

const Button = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className="direction-button">
      {direction === 'next' ? 'Next' : 'Previous'}
    </button>
  );
};

export default Button;
