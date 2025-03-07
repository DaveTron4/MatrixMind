import './App.css';
import { useState } from 'react';
import questionsAnswers from './data/questionsAnswers.jsx';
import Flashcard from './components/flashcards.jsx';


const App = () => {

  const [index, setIndex] = useState(0);
  const [side, setSide] = useState("question");

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * questionsAnswers.length);
    setIndex(randomIndex);
    setSide("question");
  }

  return (
    <div className="App">
      <h1 className='webTitle'>Characterizations of Invertible Matrices!</h1>
      <h2 className='webSubtitle'>Do you know what makes an invertible matrix invertible?</h2>
      <h3 className='cardCount'>There are: {questionsAnswers.length} flashcards</h3>
      <Flashcard data={questionsAnswers[index]} side = {side} setSide={setSide}/>
      <button onClick={nextCard}>Next Card</button>

    </div>
  )
}

export default App