
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shibaimagesSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Shibaimages : mongoose.model('shibaimages', shibaimagesSchema),
}

