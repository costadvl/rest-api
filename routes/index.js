var routes = require('express').Router();

routes.get('/',function (req,res) {
  res.status(200).json({message: 'connected to ordered routes!'});
});

module.exports = routes;
