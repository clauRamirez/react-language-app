const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');
app.use(cors())
app.use(express.json())



MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('users_hub');
    const languagesCollection = db.collection('users');
    const languagesRouter = createRouter(languagesCollection);
    app.use('/api/users', languagesRouter);
  })
  .catch(console.err);




  app.listen(5002,function(){
      console.log(`listening on port ${this.address().port}`);
  });