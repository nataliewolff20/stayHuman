const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res)=>{
    res.render('users/new.ejs');
});

router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser)=>{
        res.redirect('/');
      })
});


router.put('/', (req, res)=>{
  User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
    res.status(201).json({
      status: 201,
      message: 'User Updated'
    })
  })
})

module.exports = router;
