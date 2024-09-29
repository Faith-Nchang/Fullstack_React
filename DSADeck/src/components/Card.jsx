import React, { useState } from 'react';
import './Card.css'; // Add a CSS file for card styles

const Card = ({ question, answer, image, level }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{question}</h2>
          <p>Difficulty Level: {level}</p>
        </div>
        <div className="card-back">
          <h2>{answer}</h2>
          {image && <img src={image} alt={answer} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
