const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(session({
  secret: "jagälskarrebell",
  resave: false,
  saveUninitialized: false
}));



const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const tasksController = require('./controllers/tasks.js');
app.use('/tasks', tasksController);



app.get('/app', function(req,res){
  if(req.session.currentuser){
    res.json(req.session.currentuser);
  } else{
    res.status(401).json({
      status:401,
      message:'user not logged in'
    });
  }
});


mongoose.connect('mongodb://localhost:27017/stayHuman');
mongoose.connection.once('open', ()=>{
  console.log('mongods r here');
})

app.listen(3000, ()=>{
  console.log('lyssnande');
});
