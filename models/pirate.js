var mongoose = require('mongoose');

var pirateSchema = new mongoose.Schema({
  stats: Array,
  name: String,
  favShanty: {type: String, default: "Yo Ho Ho"},
})


module.exports = mongoose.model('Pirate', pirateSchema)