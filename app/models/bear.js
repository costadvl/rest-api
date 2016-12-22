var connect     = require('./connect');
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var bearsDB     = connect('bears');

var BearSchema   = new Schema({
    name: String
});

module.exports = bearsDB.model('Bear', BearSchema);
