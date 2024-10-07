// Card.jsx
import React from 'react';
import './Card.css'; // Add a CSS file for card styles

const Flashcard = ({ question, answer, image, level, isFlipped, setIsFlipped }) => {
  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Use the passed function to toggle flip state
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''} ${level}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{question}</h2>
        </div>
        <div className="card-back">
          <h4>{answer}</h4>
          {image && <img src={image} alt={answer} />}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
