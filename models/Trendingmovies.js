
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trendingmoviesSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Trendingmovies : mongoose.model('trendingmovies', trendingmoviesSchema),
}

