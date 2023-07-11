/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Allmovies } = require('../models/Allmovies');

/**
* Creates the data
*
* allmovies Allmovies data to be created
* returns allmovies
* */
const createallmovies = ({ allmovies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Allmovies(allmovies).save();
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
* allmoviesId String the Id parameter
* no response value expected for this operation
* */
const deleteallmovies = ({ allmoviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Allmovies.findOneAndDelete({ _id:allmoviesId }).exec();
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
const getAllallmovies = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Allmovies.find().exec();
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
const getByParamsallmovies = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Allmovies.find(JSON.parse( filter )).exec();
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
* allmoviesId String the Id parameter
* returns allmovies
* */
const getallmovies = ({ allmoviesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Allmovies.findById(allmoviesId)
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
* allmoviesId String the Id parameter
* allmovies Allmovies data to be updated (optional)
* returns allmovies
* */
const updateallmovies = ({ allmoviesId, allmovies }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Allmovies.findOneAndUpdate({ _id:allmoviesId },allmovies).exec();
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
  createallmovies,
  deleteallmovies,
  getAllallmovies,
  getByParamsallmovies,
  getallmovies,
  updateallmovies,
};
