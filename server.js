var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/pirate');


var pirateRouter = require(__dirname + '/routes/pirate_routes');

app.use('/api', pirateRouter);

app.listen(port, function() {
  console.log('I am listening on port ' + port);
});
