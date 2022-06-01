import "./App.css";
import Header from "./Components/Header";
import Question from "./Components/Question";
import { questions, astronomy, geography, history, biology } from "./questions";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const [playable, setPlayable] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [category, setCategory] = useState("");
  const categoryArr = [questions, astronomy, geography, history, biology];

  function playAgain() {
    setPlayable(true);
    setScore(0);
    setCurrentQuestion(0);
    setCategory("");
  }

  function setupGame(category, index) {
    questions = categoryArr[index];
    setCategory({ category });
  }

  function GameBody() {
    if (category === "") {
      return (
        <>
          <p>you have to choose category</p>
          <div className="categories">
            <div className="category">
              <button
                onClick={() => {
                  setupGame("astronomy", 1);
                }}
              >
                Astronomy
              </button>
            </div>
            <div className="category">
              <button
                onClick={() => {
                  setupGame("geography", 2);
                }}
              >
                Geography
              </button>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <button
                onClick={() => {
                  setupGame("history", 3);
                }}
              >
                History
              </button>
            </div>
            <div className="category">
              <button
                onClick={() => {
                  setupGame("biology", 4);
                }}
              >
                Biology
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (<>
        <p id="score">Your score : {score}</p>
        <Question
          questions={questions}
          score={score}
          setScore={setScore}
          playable={playable}
          setPlayable={setPlayable}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
        </>
      );
    }
  }

  return (
    <div className="App">
      {!playable ? (
        <div className="display-score">
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button
            onClick={() => {
              playAgain();
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          <Header />
         
          <GameBody />
        </>
      )}
    </div>
  );
}

export default App;
