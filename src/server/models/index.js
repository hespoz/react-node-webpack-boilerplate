var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , config    = require('../config')()
  , db        = {}

sequelize = new Sequelize(config.db, config.user, config.pwd, {
  dialect:  'postgres',
  protocol: 'postgres',
  port:     config.portdb,
  host:     config.host,
  logging:  true //false
})

fs
.readdirSync(__dirname)
  .filter(function(file) {
    return ((file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) == '.js'))
  })
  .forEach(function(file) {
  	console.log(path.join(__dirname, file))
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].options.hasOwnProperty('associate')) {
    db[modelName].options.associate(db)
  }
});

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);