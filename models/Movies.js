
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Movies : mongoose.model('movies', moviesSchema),
}

