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
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  
  // State variable for mastered cards
  const [masteredCards, setMasteredCards] = useState([]);
  const [view, setView] = useState('flashcards'); // State to manage the current view

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

    // Allow minor typos or partial matches
    const isCorrect = targetAnswer === userGuess || targetAnswer.includes(userGuess);

    if (isCorrect) {
      setCorrect(true); // Set correct to true for blue border
      setCurrentStreak((prev) => {
        const newStreak = prev + 1; // Increment current streak
        setLongestStreak((prevLongest) => Math.max(prevLongest, newStreak)); // Update longest streak if necessary
        return newStreak;
      });
    } else {
      setCorrect(false); // Set correct to false for red border
      setCurrentStreak(0); // Reset current streak on incorrect answer
    }

    setGuess(''); // Clear the input after submission
  };

  // Function to mark the current card as mastered
  const handleMasterCard = () => {
    setMasteredCards((prev) => [...prev, currentQuestion]); // Add the current question to mastered cards
    setQuestions((prev) => prev.filter((_, index) => index !== cardIndex)); // Remove mastered question from pool

    // Reset cardIndex if mastered card was the last one
    if (cardIndex >= questionList.length) {
      setCardIndex(0);
    }

    setGuess(''); // Clear the input after marking
    setCorrect(null); // Reset the correct status
  };

  // Function to shuffle the cards
  const handleShuffle = () => {
    const shuffledQuestions = [...questionList].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions); 
    setCardIndex(0); 
    setGuess(''); 
    setCorrect(null); 
    setIsFlipped(false); 
  };

  return (
    <div className="flashcards-container">
      <h1>Welcome to <span className="title">DSADeck</span></h1>
      <p>Learn Data Structures and Algorithms through interactive flashcards!</p>
      <h1 className="total">Total cards: {questionList.length}</h1>
      
      {/* Display current and longest streaks */}
      <div className='streak'>
        <h3>Current Streak: {currentStreak}</h3>
        <h3>Longest Streak: {longestStreak}</h3>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <div 
          className={`tab ${view === 'flashcards' ? 'active' : ''}`} 
          onClick={() => setView('flashcards')}
        >
          Flashcards
        </div>
        <div 
          className={`tab ${view === 'mastered' ? 'active' : ''}`} 
          onClick={() => setView('mastered')}
        >
          Mastered Cards
        </div>
      </div>

      {view === 'flashcards' && (
        <>
          <Flashcard 
            question={currentQuestion.content} 
            answer={currentQuestion.answer} 
            image={currentQuestion.image} 
            level={currentQuestion.level} 
            isFlipped={isFlipped} 
            setIsFlipped={setIsFlipped} 
          />

          <div className="guess-section">
            <label>Enter your answer:</label>
            <input 
              type="text" 
              onChange={(e) => setGuess(e.target.value)} 
              value={guess} 
              placeholder="Enter your answer"
              className={`guess-input ${correct === null ? 'default' : correct ? 'correct' : 'wrong'}`}
            />
            <Button onClick={handleSubmit} direction={'submit'}>Submit</Button>
            <Button onClick={handleMasterCard} direction={'master'}>Master</Button> {/* Button to mark the card as mastered */}
          </div>
          
          <div>
            <Button onClick={previousCard} disabled={cardIndex === 0} direction='< previous'>Previous</Button>
            <Button onClick={nextCard} disabled={cardIndex === questionList.length - 1} direction='next >'>Next</Button>
            <Button direction={'shuffle'} onClick={handleShuffle}>Shuffle</Button>
          </div>
          <h2>Card {cardIndex + 1} of {questionList.length} </h2>
        </>
      )}

      {view === 'mastered' && (
        <div>
          <h3>Mastered Cards:</h3>
          {masteredCards.map((card, index) => (
            <p key={index} className='mastered'>{card.content}</p> // Display the content of mastered cards
          ))}
        </div>
      )}
    </div>
  );
};

export default Flashcards;
