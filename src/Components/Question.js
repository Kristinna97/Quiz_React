import { useState } from 'react';
function Question({questions,score,setScore, playable, setPlayable}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    function checkAnswer(correct) {
        if(correct && playable){
            setScore(score+ 1);
        }
        const nextQuestion  =currentQuestion + 1
        if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			console.log("game finished")
            setPlayable(false)
		}
    }

    return <div>
        <div className='question'>
            <p>{questions[currentQuestion].questionText}</p>
            <div className='answers'>
                {questions[currentQuestion].answerOptions.map((answer) => {
               return  <button key={answer.answerText} onClick={() => checkAnswer(answer.isCorrect)}>{answer.answerText}</button>
                })}
            </div>

        </div>
    </div>
   
}

export default Question;