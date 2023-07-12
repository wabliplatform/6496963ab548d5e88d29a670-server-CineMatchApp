/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Shibaimages } = require('../models/Shibaimages');

/**
* Creates the data
*
* shibaimages Shibaimages data to be created
* returns shibaimages
* */
const createshibaimages = ({ shibaimages }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Shibaimages(shibaimages).save();
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
* shibaimagesId String the Id parameter
* no response value expected for this operation
* */
const deleteshibaimages = ({ shibaimagesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Shibaimages.findOneAndDelete({ _id:shibaimagesId }).exec();
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
const getAllshibaimages = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Shibaimages.find().exec();
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
const getByParamsshibaimages = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Shibaimages.find(JSON.parse( filter )).exec();
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
* shibaimagesId String the Id parameter
* returns shibaimages
* */
const getshibaimages = ({ shibaimagesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Shibaimages.findById(shibaimagesId)
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
* shibaimagesId String the Id parameter
* shibaimages Shibaimages data to be updated (optional)
* returns shibaimages
* */
const updateshibaimages = ({ shibaimagesId, shibaimages }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Shibaimages.findOneAndUpdate({ _id:shibaimagesId },shibaimages).exec();
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
  createshibaimages,
  deleteshibaimages,
  getAllshibaimages,
  getByParamsshibaimages,
  getshibaimages,
  updateshibaimages,
};
