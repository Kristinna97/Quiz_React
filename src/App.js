
import './App.css';
import Header from './Components/Header'
import Question from './Components/Question';
import { questions } from './questions';
import { useState } from 'react';

function App() {

  
  const [score, setScore] = useState(0);
 
  const [playable, setPlayable] = useState(true)

 

  return (
    <div className="App">
   <Header/>
   <p id="score">{score}</p>
   <Question questions = {questions} score={score} setScore= {setScore} playable= {playable} setPlayable={setPlayable}/>
    </div>
  );
}

export default App;
