const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

// router.get('/new', (req, res)=>{
//     res.render('sessions/new.ejs');
// });

router.post('/', (req, res)=>{
    User.findOne({ username:req.body.username}, (err, foundUser)=>{
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentuser = foundUser;
            res.status(201).json({
              status:201,
              message: foundUser
            })
        } else {
            res.status(401).json({
              status: 401,
              message: "Login Failed"
            })
        }
    });
});

router.delete('/', (req, res)=>{
    req.session.destroy(()=>{
      res.status(200).json({
        status: 200,
        message: 'Logout Complete'
      })
    })
})

module.exports = router;
