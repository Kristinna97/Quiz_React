
function Question({questions,score,setScore, playable, setPlayable ,currentQuestion, setCurrentQuestion}) {

    
    
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

    return<div className='question-box'>
        <div className='question-field'>
            <p className='question'>{questions[currentQuestion].questionText}</p>
            <img alt ="visual answer" src={questions[currentQuestion].img} ></img>
            <div className='answers'>
                {questions[currentQuestion].answerOptions.map((answer) => {
               return  <button key={answer.answerText} onClick={() => checkAnswer(answer.isCorrect)}>{answer.answerText}</button>
                })}
            </div>

        </div>
    </div>
  
}

export default Question;