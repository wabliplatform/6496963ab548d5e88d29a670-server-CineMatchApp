/**
 * The MoviesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MoviesService');
const createmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.createmovies);
};

const deletemovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletemovies);
};

const getAllmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllmovies);
};

const getByParamsmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsmovies);
};

const getmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getmovies);
};

const updatemovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatemovies);
};


module.exports = {
  createmovies,
  deletemovies,
  getAllmovies,
  getByParamsmovies,
  getmovies,
  updatemovies,
};
