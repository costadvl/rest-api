var mongoose = require('mongoose');

var connectionDB = function (arg) {
  var pass = new mongoose.connect('mongodb://localhost:27017/'+arg);
  return pass;
};

module.exports = connectionDB;
