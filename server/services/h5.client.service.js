const rp = require('request-promise');
const request = require('request');
const proxyRequest = require('./../models/proxyRequest');
const { SOURCEAPI, API } = require('../lib/api-pool.js');

const handleErr = (err) => {
  // TODO:do something
};

const handleRes = (res, data) => {
  // console.log(data, Object.prototype.toString.call(data));

  if (Object.prototype.toString.call(data) === '[object String]') {
    data = JSON.parse(data)
  }
  res.json(data);

  res.end();
};

module.exports = function(app) {

};
