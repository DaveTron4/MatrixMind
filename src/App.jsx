import './App.css';
import { useState } from 'react';
import questionsAnswers from './data/questionsAnswers.jsx';
import Flashcard from './components/flashcards.jsx';
import GuessForm from './components/guessForm.jsx';


const App = () => {

  const [index, setIndex] = useState(0);
  const [side, setSide] = useState("question");

  const [seenAnswer, setSeenAnswer] = useState(false);

  const nextCard = () => {
    if (index === questionsAnswers.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setSeenAnswer(false);
    setSide("question");
  }

  const previousCard = () => {
    if (index === 0) {
      setIndex(questionsAnswers.length - 1);
    } else {
      setIndex(index - 1);
    }
    setSeenAnswer(false);
    setSide("question");
  }

  return (
    <div className="App">
      <h1 className='webTitle'>Characterizations of Invertible Matrices!</h1>
      <h2 className='webSubtitle'>Do you know what makes an invertible matrix invertible?</h2>
      <h3 className='cardCount'>There are: {questionsAnswers.length} flashcards</h3>
      <Flashcard data={questionsAnswers[index]} side = {side} setSide={setSide} seenAnswer = {seenAnswer} setSeenAnswer={setSeenAnswer}/>
      <GuessForm data={questionsAnswers[index] } seenAnswer = {seenAnswer}/>
      <div className='buttonContainer'>
        <button onClick={previousCard}>Previous Card</button>
        <button onClick={nextCard}>Next Card</button>
      </div>
      

    </div>
  )
}

export default App