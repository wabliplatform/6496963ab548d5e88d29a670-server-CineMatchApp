/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Trendingmovies } = require('../models/Trendingmovies');

/**
* Creates the data
*
* trendingmovies Trendingmovies data to be created
* returns trendingmovies
* */
const createtrendingmovies = ({ trendingmovies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Trendingmovies(trendingmovies).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* trendingmoviesId String the Id parameter
* no response value expected for this operation
* */
const deletetrendingmovies = ({ trendingmoviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trendingmovies.findOneAndDelete({ _id:trendingmoviesId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltrendingmovies = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Trendingmovies.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamstrendingmovies = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Trendingmovies.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* trendingmoviesId String the Id parameter
* returns trendingmovies
* */
const gettrendingmovies = ({ trendingmoviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trendingmovies.findById(trendingmoviesId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* trendingmoviesId String the Id parameter
* trendingmovies Trendingmovies data to be updated (optional)
* returns trendingmovies
* */
const updatetrendingmovies = ({ trendingmoviesId, trendingmovies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trendingmovies.findOneAndUpdate({ _id:trendingmoviesId },trendingmovies).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtrendingmovies,
  deletetrendingmovies,
  getAlltrendingmovies,
  getByParamstrendingmovies,
  gettrendingmovies,
  updatetrendingmovies,
};
