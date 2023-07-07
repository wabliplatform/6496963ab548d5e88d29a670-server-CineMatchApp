
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
Underscoreid:String , 


user:String 



})

module.exports = {
  Users : mongoose.model('users', usersSchema),
}

