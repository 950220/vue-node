const rp = require('request-promise');
const request = require('request');
const proxyRequest = require('../models/proxyRequest');

const { SOURCEAPI, NAILAPI } = require('../lib/api-pool.js');

const handleErr = (err) => {
  // TODO:do something
  console.log(44444)
};

const handleRes = (res, data) => {
  // console.log(data, Object.prototype.toString.call(data));

  if (Object.prototype.toString.call(data) === '[object String]') {
    data = JSON.parse(data)
  }
  console.log(data)
  res.json(data);

  res.end();
};

module.exports = function(app) {

  app.get(SOURCEAPI.getDiseases, (req, res) => {
    console.log(333333)

    const url = `${NAILAPI.getDiseases}`;

    const options = proxyRequest.getModels(req, 'json', url, true);

    rp(options)
      .then(parsedBody => handleRes(res, parsedBody))
      .catch(err => handleErr(err));

  });

  app.post(SOURCEAPI.getDiseases, (req, res) => {

    const url = `${B2BAPI.getDiseases}`;

    const options = proxyRequest.postModels(req, 'json', url, false);

    rp(options)
      .then(parsedBody => handleRes(res, parsedBody.body))
      .catch(err => handleErr(err));

  });
};
