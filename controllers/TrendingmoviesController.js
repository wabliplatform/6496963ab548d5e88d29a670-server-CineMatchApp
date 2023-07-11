/**
 * The TrendingmoviesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TrendingmoviesService');
const createtrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtrendingmovies);
};

const deletetrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetrendingmovies);
};

const getAlltrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltrendingmovies);
};

const getByParamstrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamstrendingmovies);
};

const gettrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettrendingmovies);
};

const updatetrendingmovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetrendingmovies);
};


module.exports = {
  createtrendingmovies,
  deletetrendingmovies,
  getAlltrendingmovies,
  getByParamstrendingmovies,
  gettrendingmovies,
  updatetrendingmovies,
};
