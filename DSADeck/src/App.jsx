import { useState } from 'react';
import Flashcards from './components/Flashcards';
import './App.css';

function App() {
  const [isStarted, setIsStarted] = useState(false); 

  const handleGetStarted = () => {
    setIsStarted(true); // Set to true when the button is clicked
  };

  return (
    <>
      {!isStarted ? (
        <div className="hero-container">
          <h1>Welcome to <span className="title">DSADeck</span></h1>
          <h2>Learn Data Structures and Algorithms through interactive flashcards!</h2>
          <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      ) : (
        <Flashcards />
      )}
    </>
  );
}

export default App;
