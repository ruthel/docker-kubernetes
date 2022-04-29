const mongoose = require("mongoose")


const {
  Schema
} = mongoose;

const userSchema = new Schema({
    firstName: {
      type: String,
      minlength: [3, 'First name too short'],
      trim: true,
      required: false,
      
    },
    lastName: {
      trim: true,
      required: false,
      type: String,
      minlength: [3, 'Last name too short'],
    },
    userName: {
      trim: true,
      required: false,
      type: String,
      minlength: [3, 'Last name too short'],
    }
  },
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);
module.exports = User;