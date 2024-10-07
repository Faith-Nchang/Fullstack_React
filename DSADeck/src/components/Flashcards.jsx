import { useState } from 'react';
import Flashcard from './Flashcard';
import Button from './button';
import Questions from './Questions';

const Flashcards = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); 
  const [guess, setGuess] = useState(''); 
  const [correct, setCorrect] = useState(null); // Set to null for initial state
  const [questionList, setQuestions] = useState(Questions);

  const currentQuestion = questionList[cardIndex];

  // Function to go to the next card
  const nextCard = () => {
    setGuess('');
    const newIndex = (cardIndex + 1) % questionList.length;
    setCardIndex(newIndex);
    setIsFlipped(false); // Reset flip state
    setCorrect(null); // Reset border color to black when moving to a new card
  };
  
  // Function to go to the previous card
  const previousCard = () => {
    setGuess('');
    const newIndex = (cardIndex - 1 + questionList.length) % questionList.length;
    setCardIndex(newIndex);
    setIsFlipped(false); // Reset flip state
    setCorrect(null); // Reset border color to black when moving to a new card
  };

  // Function to check the user's guess
  const handleSubmit = () => {
    const normalize = (str) => str.toLowerCase().trim(); // Normalize by trimming and converting to lowercase
  
    const targetAnswer = normalize(currentQuestion.answer);
    const userGuess = normalize(guess);
  
    // You can extend this to allow for minor typos or partial matches using more advanced techniques if needed.
    const isCorrect = targetAnswer === userGuess || targetAnswer.includes(userGuess);
  
    if (isCorrect) {
      setCorrect(true); // Set correct to true for blue border
    } else {
      setCorrect(false); // Set correct to false for red border
    }
  
  };

   // Function to shuffle the cards
const handleShuffle = () => {
    // Create a copy of the questionList and shuffle it
    const shuffledQuestions = [...questionList].sort(() => Math.random() - 0.5);
    
    // Update the state with the new shuffled array
    setQuestions(shuffledQuestions); 
  
    // Set a random index for the current card after shuffling
    // const randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
    setCardIndex(0); 
    
    // Clear the input field and reset other states
    setGuess(''); 
    setCorrect(null); 
    setIsFlipped(false); 
  };
  

  return (
    <div className="flashcards-container">
      <h1>Welcome to <span className="title">DSADeck</span></h1>
      <h2>Learn Data Structures and Algorithms through interactive flashcards!</h2>
      <h1 className="total">Total cards: {questionList.length}</h1>
      
      <Flashcard 
        question={currentQuestion.content} 
        answer={currentQuestion.answer} 
        image={currentQuestion.image} 
        level={currentQuestion.level} 
        isFlipped={isFlipped} 
        setIsFlipped={setIsFlipped} 
      />

      
      <div>
        <label>Enter your answer:</label>
        <input 
          type="text" 
          onChange={(e) => setGuess(e.target.value)} 
          value={guess} 
          placeholder="Enter your answer"
          className={`guess-input ${correct === null ? 'default' : correct ? 'correct' : 'wrong'}`}
        />
        <Button onClick={handleSubmit} direction={'submit'}>Submit</Button>
      </div>
      
      <div>
        <Button onClick={previousCard} disabled={cardIndex === 0} direction='< previous'>Previous</Button>
        <Button onClick={nextCard} disabled={cardIndex === questionList.length - 1} direction='next >'>Next</Button>
        <Button direction={'shuffle'} onClick={handleShuffle}>Shuffle</Button>
      </div>

      <h2>Card {cardIndex +1} of {questionList.length} </h2>
    </div>
  );
};

export default Flashcards;
