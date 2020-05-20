const HOST = require('../api.js');

/*
* SOURCEAPI 为node的API
*
* NAILAPI 为内部转发API
*
* */

module.exports = {
  NAILAPI: {
    // 获取疾病
    getDiseases: HOST.DATA_SERVICE + '/neo-data-service/diseases/exception'
  },
  SOURCEAPI: {
    getDiseases: '/neo-data-service/diseases/exception',
  }
}
