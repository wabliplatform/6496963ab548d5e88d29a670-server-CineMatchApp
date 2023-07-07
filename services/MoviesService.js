/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Movies } = require('../models/Movies');

/**
* Creates the data
*
* movies Movies data to be created
* returns movies
* */
const createmovies = ({ movies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Movies(movies).save();
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
* moviesId String the Id parameter
* no response value expected for this operation
* */
const deletemovies = ({ moviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Movies.findOneAndDelete({ _id:moviesId }).exec();
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
const getAllmovies = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Movies.find().exec();
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
const getByParamsmovies = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Movies.find(JSON.parse( filter )).exec();
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
* moviesId String the Id parameter
* returns movies
* */
const getmovies = ({ moviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Movies.findById(moviesId)
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
* moviesId String the Id parameter
* movies Movies data to be updated (optional)
* returns movies
* */
const updatemovies = ({ moviesId, movies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Movies.findOneAndUpdate({ _id:moviesId },movies).exec();
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
  createmovies,
  deletemovies,
  getAllmovies,
  getByParamsmovies,
  getmovies,
  updatemovies,
};
