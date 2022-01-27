import React, {useState} from 'react';
import QuizButton from './QuizButton';
import Quiz from './Quiz';


 const QuizList = ({quizzes,createUser}) => {

  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuiz,setCurrentQuiz] = useState(0)
  
    const onQuizClick = (quiz) => {
        setSelectedQuiz(quiz)
  } 
    const onClickNextQuiz = ()=>{
      setCurrentQuiz(currentQuiz + 1)
  }

  const quizButtonNodes = quizzes.map((quiz, index) => {
        return <QuizButton key={index} quiz = {quiz} onQuizClick={onQuizClick}  />

    })
  
    return (
    <div  >
          {!selectedQuiz ? <h1>Let's choose a quiz:</h1>: null} 
        <div className='quiz-card'>
       
        {!selectedQuiz ? quizButtonNodes : null}
        </div>
        {selectedQuiz ? <Quiz createUser={createUser }quiz={selectedQuiz} currentQuiz ={currentQuiz} onClickNextQuiz={onClickNextQuiz}/> : null}
        
    </div>
  );
};


export default QuizList;