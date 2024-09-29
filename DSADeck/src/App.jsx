import { useState } from 'react';
import Card from './components/card';
import Button from './components/button';
import Questions from './components/Questions';
import './App.css';

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  
  const questionList = Questions; // Assuming Questions is an array of questions
  const currentQuestion = questionList[cardIndex];

  // Function to go to the next card
  const nextCard = () => {
    if (cardIndex < questionList.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  // Function to go to the previous card
  const previousCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <>
      <h1>Flashcard App</h1>
      <Card content={currentQuestion.content} answer={currentQuestion.answer} level={currentQuestion.level} image={currentQuestion.image} />
      <div>
        <Button onClick={previousCard} disabled={cardIndex === 0}>Previous</Button>
        <Button onClick={nextCard} disabled={cardIndex === questionList.length - 1}>Next</Button>
      </div>
      <p>Current Card: {cardIndex + 1} of {questionList.length}</p>
    </>
  );
}

export default App;
