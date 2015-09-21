var pirate = require(__dirname + '/../models/pirate');
var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');
var pirateRoute = module.exports = exports = express.Router();

pirateRoute.get('/pirate', jsonParser, function(req, res) {
  pirate.find({}, function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

pirateRoute.post('/pirate', jsonParser, function(req, res) {
  var newPirate = new pirate(req.body);
  newPirate.save(function(err, data) {
    if (err) handleError(err, res);
    res.json(data);
  });
});


pirateRoute.put('/pirate/:id', jsonParser, function(req, res) {
  var newpirateBody = req.body;
  delete newpirateBody._id;
  pirate.update({_id: req.params.id}, newpirateBody, function(err, data) {
    if (err) return handleError(err, res);
    res.json({msg: 'success'});
  });
});

pirateRoute.delete('/pirate/:id', jsonParser, function(req, res) {
  pirate.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);
    res.json({msg: 'pirate was deleted'});
  });
});

pirateRoute.get('/pirate/:id/sing', jsonParser, function(req, res) {
   pirate.find({_id: req.params.id}, function(err, data) {
    if (err) return handleError(err, res);
    var msgRet = data[0].name + ' began singing ' + data[0].favShanty;
    res.json({msg: msgRet});
  });
});


