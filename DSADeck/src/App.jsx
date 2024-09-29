import { useState } from 'react';
import Card from './components/card';
import Button from './components/button';
import Questions from './components/Questions';
import './App.css';

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false); 
  const [isFlipped, setIsFlipped] = useState(false); // Manage flipped state here

  
  const questionList = Questions; // Assuming Questions is an array of questions
  const currentQuestion = questionList[cardIndex];

  
  // Function to go to the next card
  const nextCard = () => {
    if (cardIndex < questionList.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsFlipped(false); // Reset the flip state
    }
  };

  // Function to go to the previous card
  const previousCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setIsFlipped(false); // Reset the flip state
    }
  };


  const handleGetStarted = () => {
    setIsStarted(true); // Set to true when the button is clicked
};

  return (
    <>
       {!isStarted ? (
                <div className="hero-container">
                    <h1>Welcome to DSADeck</h1>
                    <p>Learn Data Structures and Algorithms through interactive flashcards!</p>
                    <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
                </div>
            ) : (
                <div className="flashcards-container">
                    <h1>Total questions: {questionList.length}</h1>
                    <Card 
                      question={currentQuestion.content} 
                      answer={currentQuestion.answer} 
                      image={currentQuestion.image} 
                      level={currentQuestion.level} 
                      isFlipped={isFlipped} // Pass flipped state to Card
                      setIsFlipped={setIsFlipped} // Pass the function to set flipped state
                    />
                    <h3>Current Card: {cardIndex + 1} of {questionList.length}</h3>
                    <div>
                        <Button onClick={previousCard} disabled={cardIndex === 0} direction='previous'>Previous</Button>
                        <Button onClick={nextCard} disabled={cardIndex === questionList.length - 1} direction='next'>Next</Button>
                    </div>
                    
                </div>
            )}
    </>
  );
}

export default App;
