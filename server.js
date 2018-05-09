const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const tasksController = require('./controllers/tasks.js');
app.use('/tasks', tasksController);

mongoose.connect('mongodb://localhost:27017/stayHuman');
mongoose.connection.once('open', ()=>{
  console.log('mongods r here');
})

app.listen(3000, ()=>{
  console.log('lyssnande');
});
