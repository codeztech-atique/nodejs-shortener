const mongoose = require('mongoose');

var ppcontent = new mongoose.Schema({
  id: {type: String},
  url: { type: String},
  description: { type: String},
  createdAt: { type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

var ppcontent = mongoose.model('ppcontent', ppcontent);
module.exports = ppcontent;
