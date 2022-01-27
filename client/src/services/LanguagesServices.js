const baseURL = "http://localhost:5001/api/languages";
const userUrl = "http://localhost:5002/api/users"
 

const LanguagesService = {
   
    getLanguages(){
    return fetch(baseURL)
    .then(res => res.json());
    
    },getUser(){
      return fetch(userUrl)
      .then(res => res.json());
      
      },

  
    postUser(payload) {
      return fetch(userUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
    },
  
    deleteUser(id) {
      return fetch(userUrl + id, {
        method: 'DELETE'
      })
    }
  }
  
  export default LanguagesService


