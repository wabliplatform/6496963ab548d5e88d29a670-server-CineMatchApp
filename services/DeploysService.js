/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Deploys } = require('../models/Deploys');

/**
* Creates the data
*
* deploys Deploys data to be created
* returns deploys
* */
const createdeploys = ({ deploys }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Deploys(deploys).save();
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
* deploysId String the Id parameter
* no response value expected for this operation
* */
const deletedeploys = ({ deploysId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deploys.findOneAndDelete({ _id:deploysId }).exec();
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
const getAlldeploys = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Deploys.find().exec();
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
const getByParamsdeploys = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Deploys.find(JSON.parse( filter )).exec();
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
* deploysId String the Id parameter
* returns deploys
* */
const getdeploys = ({ deploysId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deploys.findById(deploysId)
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
* deploysId String the Id parameter
* deploys Deploys data to be updated (optional)
* returns deploys
* */
const updatedeploys = ({ deploysId, deploys }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deploys.findOneAndUpdate({ _id:deploysId },deploys).exec();
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
  createdeploys,
  deletedeploys,
  getAlldeploys,
  getByParamsdeploys,
  getdeploys,
  updatedeploys,
};
