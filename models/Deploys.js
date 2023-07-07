
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploysSchema = new Schema({
Underscoreid:String , 


deploy:String 



})

module.exports = {
  Deploys : mongoose.model('deploys', deploysSchema),
}

