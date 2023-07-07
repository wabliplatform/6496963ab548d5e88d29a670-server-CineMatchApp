/**
 * The UsersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsersService');
const createusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.createusers);
};

const deleteusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteusers);
};

const getAllusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllusers);
};

const getByParamsusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsusers);
};

const getusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getusers);
};

const updateusers = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateusers);
};


module.exports = {
  createusers,
  deleteusers,
  getAllusers,
  getByParamsusers,
  getusers,
  updateusers,
};
