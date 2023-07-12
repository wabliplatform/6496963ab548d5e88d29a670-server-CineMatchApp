/**
 * The ShibaimagesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ShibaimagesService');
const createshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.createshibaimages);
};

const deleteshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteshibaimages);
};

const getAllshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllshibaimages);
};

const getByParamsshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsshibaimages);
};

const getshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.getshibaimages);
};

const updateshibaimages = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateshibaimages);
};


module.exports = {
  createshibaimages,
  deleteshibaimages,
  getAllshibaimages,
  getByParamsshibaimages,
  getshibaimages,
  updateshibaimages,
};
