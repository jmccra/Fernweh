const express = require('express');
const path = require('path');
const app = express();
const port = 3307;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {seed} = require('../db/models/seed');

mongoose.connect('mongodb://localhost:27017/locations',
{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(()=>{
  console.log('Database connection established!')
})
.catch((err)=>{
  console.log(err)
})

// seed();


// Middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());
app.use(express.static('public'))




app.listen(port, () => console.log(`Server is running on ${port}...`));
