import React, { useState } from 'react';
import LanguageMainPageButtons from './LanguageMainPageButtons';
import QuizList from './QuizList';
import TopicsList from './TopicsList';
import Button from 'react-bootstrap/Button'
import Leaderboard from './Leaderboard';

const MainPage = ({selectedLanguage,userData,createUser}) => {

        const [selectedComponent,setSelectedComponent] = useState(null)
        const [userHighScore,setUserHighScore] = useState(0)
        


        const onClickBack = (event) => {
            setSelectedComponent(event.target.value)
            document.getElementById("answer-click-div").setAttribute("class","click")
        }
        
        const onClickSelect =(value) =>{
            setSelectedComponent(value)
        }
        return (
            <>
        {selectedComponent ? <Button className="btn-white-bg btn-back"  value={null} onClick={onClickBack} >Back</Button>: null}
        <div className='home-page-container'>
        {!selectedComponent ? <LanguageMainPageButtons onClickSelect={onClickSelect}/> : null}
        {selectedComponent === "quiz" ? <QuizList quizzes ={selectedLanguage.quizzes} createUser={createUser}/> : null }
        {selectedComponent === "topics" ? <TopicsList topics = {selectedLanguage.topics}/> : null }
        {selectedComponent === "leaderboard" ? <Leaderboard userData={userData}/>: null }
        
         </div>
            </>
    );
};

export default MainPage;