import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import QuizSubmitScore from "./QuizSubmitScore";

const QuizAnswers = ({showQuestions,setShowQuestions,createUser, answer,resetColour,setShowButton,setResetColour,currentQuiz,setShowScore,setCurrentScore,currentScore,answerElement}) => {
    
    const [showUserSubmit,setShowUserSubmit] = useState(false)
    const [colour, setColour] = useState("primary");
    const [clickable,setClickable] = useState(false)
    const [showConfetti,setShowConfetti] = useState(null)
    const { width, height } = useWindowSize()
    
  
    const confetti = <Confetti width={width} height={height} />
    
   
   


      
    useEffect(() => {
        setColour("primary")
        setResetColour(false)
        setClickable(false)
      },[resetColour])
    
    const handleClick = (event) => {
        setClickable(true)
        if (currentQuiz == 3){
            if(event.target.value === "true") {
                
                setShowQuestions(false)
                setColour("success");
                setCurrentScore(currentScore + 3)
                setShowScore(true)
                setShowConfetti(true)
                answerElement.setAttribute("class","no-click")
                setShowUserSubmit(true)
                
            } else if (event.target.value === "false") {
                setColour("danger");
                setCurrentScore(currentScore -1 )
            }
            setShowButton(false)
            
           
         }else if (event.target.value === "true") {
            setColour("success");
            setShowButton(true)
            setCurrentScore(currentScore + 3)
            answerElement.setAttribute("class","no-click")
        } else if (event.target.value === "false") {
            setColour("danger");
            setCurrentScore(currentScore -1 )
            
            
        }
    };

    
    
    return (
        
        
        <div className="answers-container">
        
         {!showQuestions ?  <Button className="btn-long"
            variant={colour}
            onClick={handleClick}
            value={answer.isCorrect}    
            disabled={clickable}     
                         >
            {answer.text}
            </Button>: null}
        
        {showQuestions?<h1>Submit Deatils</h1> : null }
        {showConfetti ? confetti : null }
        {showQuestions ? <QuizSubmitScore createUser={createUser,currentScore} /> : null }
         </div>
    

    );
};

export default QuizAnswers;
