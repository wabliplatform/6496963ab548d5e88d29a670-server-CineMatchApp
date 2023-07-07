/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Users } = require('../models/Users');

/**
* Creates the data
*
* users Users data to be created
* returns users
* */
const createusers = ({ users }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Users(users).save();
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
* usersId String the Id parameter
* no response value expected for this operation
* */
const deleteusers = ({ usersId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Users.findOneAndDelete({ _id:usersId }).exec();
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
const getAllusers = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Users.find().exec();
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
const getByParamsusers = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Users.find(JSON.parse( filter )).exec();
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
* usersId String the Id parameter
* returns users
* */
const getusers = ({ usersId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Users.findById(usersId)
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
* usersId String the Id parameter
* users Users data to be updated (optional)
* returns users
* */
const updateusers = ({ usersId, users }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Users.findOneAndUpdate({ _id:usersId },users).exec();
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
  createusers,
  deleteusers,
  getAllusers,
  getByParamsusers,
  getusers,
  updateusers,
};
