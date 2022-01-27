import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const LanguageMainPageButtons = ({onClickSelect}) => {
  

  const handleClick = (event) => {
    onClickSelect(event.target.getAttribute('data-value'))
  }
  

  return (
    <>
    <h1>Let's start: </h1>
    
<div className="flex-wrap">

  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="topics" variant="top" src="https://images.pexels.com/photos/4340785/pexels-photo-4340785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body data-value="topics">
      <Card.Text data-value="topics">
      Topics
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="quiz" variant="top" src="https://images.pexels.com/photos/267705/pexels-photo-267705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body data-value="quiz">
      <Card.Text data-value="quiz">
      Quizzes
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="leaderboard" variant="top" src="https://images.pexels.com/photos/669613/pexels-photo-669613.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
    <Card.Body data-value="leaderboard">
      <Card.Text data-value="leaderboard">
      LeaderBoards
      </Card.Text>
    </Card.Body>
  </Card>
{/* 
  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="leaderboard" variant="top" src="https://images.pexels.com/photos/4340785/pexels-photo-4340785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body data-value="leaderboard">
      <Card.Text data-value="leaderboard">
      Topics
      </Card.Text>
    </Card.Body>
  </Card> */}

</div>

</>



      // <Container>
      // <Row>
      // <Col>
      //   <button value="topics" onClick={handleClick}>Topics</button>
      //  </Col>
      //  <Col>
      //   <button value="quiz" onClick={handleClick} >Quizz</button>
      // </Col>
      // </Row>
      // </Container>
  )
};

export default LanguageMainPageButtons;