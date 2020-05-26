
module.exports = function(app) {

  let h5 = require('../controllers/h5');

  // 首页
  app.get('/', h5.render);

  app.get('/h5/index', h5.render);

  app.get('/h5/home', h5.render);

};

