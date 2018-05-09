const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
  title: String
});

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;
