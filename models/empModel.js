const mongoose = require('mongoose');
const validator = require('validator');

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Name'],
    maxLength: [30, 'Name cannot exceed 30 characters'],
    minLength: [3, 'Name should have more than 4 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email'],
    unique: true,
    validate: [validator.isEmail, 'Please Enter a valid Email'],
  },
  department: {
    type: String,
    required: [true, 'Please Enter Your Department'],
  },
  joiningDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Employee', empSchema);
