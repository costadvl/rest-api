var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarsSchema   = new Schema({
    company: String,
    model: String,
    year: String
});

exports.connectToBears = function (db) {
  return db.model('Bear', BearSchema);
};
