const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/stayhuman'


app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret:'jagälskarrebell',
    resave:false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended:false}));

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentuser
    });
});


app.get('/app', (req, res)=>{
    if(req.session.currentuser){
        res.send('the app');
    } else {
        res.redirect('/sessions/new');
    }
});

mongoose.connect(mongoUri);
mongoose.connect('mongodb://localhost:27017/stayHuman');

mongoose.connection.once('open', ()=>{
    console.log('mongods r here');
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
