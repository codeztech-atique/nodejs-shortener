const mongoose = require('mongoose');

var ppcontent = new mongoose.Schema({
  url: { type: String},
  shortedUrl: { type: String},
  createdAt: { type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

var ppcontent = mongoose.model('ppcontent', ppcontent);
module.exports = ppcontent;
