
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allmoviesSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Allmovies : mongoose.model('allmovies', allmoviesSchema),
}

