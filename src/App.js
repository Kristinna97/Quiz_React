import "./App.css";
import Header from "./Components/Header";
import Question from "./Components/Question";
import { questions } from "./questions";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const [playable, setPlayable] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function playAgain(){
    setPlayable(true);
    setScore(0);
    setCurrentQuestion(0)
  }
  return (
    <div className="App">
      {!playable ? (
        <div className="display-score">
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={()=> {playAgain()}}>Restart</button>
        </div>
      ) : (
        <>
          <Header />
          <p id="score">{score}</p>
          <Question
            questions={questions}
            score={score}
            setScore={setScore}
            playable={playable}
            setPlayable={setPlayable}
            currentQuestion={currentQuestion}
            setCurrentQuestion = {setCurrentQuestion}
          />
        </>
      )}
    </div>
  );
}

export default App;
