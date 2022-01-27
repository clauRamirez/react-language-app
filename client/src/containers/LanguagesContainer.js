import React, { useEffect, useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import MainPage from '../components/LanguageMainPage';
import LanguagesService from '../services/LanguagesServices';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';



const LanguagesContainer = () => {
    
    const [allData,setAllData] = useState([])
    const [selectedLanguage,setSelectedLanguage] = useState(null)
    const [userData, setUserData] = useState([])
    
useEffect(()=>{
      LanguagesService.getLanguages()
    .then(allData => setAllData(allData));LanguagesService.getUser().then(userData=>setUserData(userData))

},[])

const onClickLanguage = (language) =>{
   setSelectedLanguage(language)
}
const handleHomeClick = ()=>{
    setSelectedLanguage(null)
    document.getElementById("answer-click-div").setAttribute("class","click")
}
const createUser = newUser => {
    LanguagesService.postUser(newUser)
      .then(savedUser => setUserData([...userData, savedUser]))
  }
  
  const deleteUser = idToDelete => {
    LanguagesService.deleteUser(idToDelete)
      .then(() => {
        setUserData(userData.filter(user => user._id !== idToDelete))
      })
  }




return (
 

<Container fluid='md' className='main-container'>
<Button className="btn btn-white-bg" onClick={handleHomeClick} >Home</Button>         
    {!selectedLanguage ? <LanguageSelector allData={allData} onClickLanguage={onClickLanguage}/> : null}
    {selectedLanguage ? <MainPage  selectedLanguage={selectedLanguage} userData = {userData} deleteUser={deleteUser} createUser={createUser}/> : null }

     
</Container>

 
  );
};


export default LanguagesContainer;
