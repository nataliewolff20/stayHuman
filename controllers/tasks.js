const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/tasks.js');

router.post('/', (req,res)=>{
  Tasks.create(req.body,(err, createdTasks)=>{
    res.json(createdTasks);
  });
});


router.get('/', (req,res)=>{
  Tasks.find({}, (err, foundTasks)=>{
    res.json(foundTasks);
  });
});

router.delete('/:id', (req, res)=>{
  Tasks.findByIdAndRemove(req.params.id, (err, deletedTasks)=>{
    res.json(deletedTasks);
  });
});

router.put('/:id', (req, res)=>{
    Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTasks)=>{
        res.json(updatedTasks);
    });
});


module.exports = router;
