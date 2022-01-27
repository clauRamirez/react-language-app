import React from 'react';
import { useState } from 'react';

const QuizSubmitScore = ({createUser,currentScore}) => {
  
  const [name, setName] = useState('')
  const [highscore, setHighScore] = useState(0)
  const [age, setAge] = useState(0)
  const [howCool, setHowCool] = useState(0)

  const handleNameChange = event => setName(event.target.value)
  const handleHighScoreChage = event => setHighScore(event.target.value)
  const handleAgeChange = event => setAge(event.target.value)
  const handleHowCoolChange = event => setHowCool(event.target.value)
  
  const handleSubmit = event => {
    event.preventDefault()
 
    const user = {
      name,
      age,
      howCool,
      high_score: {
        spanish:{highscore,highscore},
        german:{highscore,highscore},
        slovakian:{highscore,highscore}
      }
    }
    setHighScore()
    createUser(user)
    setName('')
    setHowCool(0)
    setHighScore(0)
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange} 
        required
      />

     </form>
  )
}


export default QuizSubmitScore;
