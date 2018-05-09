const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/tasks.js');



router.get('/', (req,res)=>{
  Tasks.find({}, (error, foundTasks)=>{
    res.json(foundTasks);
  });
});

router.post('/', (req,res)=>{
  Tasks.create(req.body,(error, createdTasks)=>{
    res.json(createdTasks);
  });
});

router.delete('/:id', (req, res)=>{
  Tasks.findByIdAndRemove(req.params.id, (error, deletedTasks)=>{
    res.json(deletedTasks);
  });
});

router.put('/:id', (req, res)=>{
    Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedTasks)=>{
        res.json(updatedTasks);
    });
});


module.exports = router;
