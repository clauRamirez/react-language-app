import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import QuizAnswers from "./QuizAnswers";
const Quiz = ({quiz,currentQuiz,onClickNextQuiz,createUser}) => {
  
  const [currentScore,setCurrentScore] = useState(12) 
  const [showButton,setShowButton]  = useState(false)
  const [resetColour,setResetColour] = useState(false)
  const [showScore,setShowScore] = useState(false)
  const [showQuestions,setShowQuestions] =useState(true)
  const answerElement = document.getElementById("answer-click-div")

  const handleClick =()=>{
      
      onClickNextQuiz
      (setShowButton(false))
      setResetColour(true)
      setShowScore(false)
      answerElement.setAttribute("class","click")
   }            

  const currentQuizData = quiz.quiz[currentQuiz]
    
    const answersNodes = currentQuizData.answers.map((answer,index)=>{
      return <QuizAnswers  answer ={answer} key={index}  setResetColour ={setResetColour} resetColour ={resetColour} setShowButton={setShowButton} currentQuiz={currentQuiz} setCurrentScore={setCurrentScore} currentScore ={currentScore} setShowScore ={setShowScore} answerElement={answerElement}/>
    })

    
  
    
    return (
        <>
            <div className="quiz quiz-title"> <h3>Quiz {quiz.id}</h3> </div>
           { !showQuestions ? null : <div className="question-container"><h4> {currentQuizData.question}  </h4></div>}
            <div className="" id="answer-click-div">
            {answersNodes}
           </div>
            {showButton ? <Button variant="primary" className="btn-next" onClick={handleClick}>Next</Button>: null}
            {showScore? <div className="score-container"><h4>SCORE:{currentScore}/24</h4> </div>:null}
        </>
    )
}

export default Quiz;