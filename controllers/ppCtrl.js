const mongoose = require('mongoose');
const cryptoRandomString = require('crypto-random-string');
const chalk = require('chalk');

require('../models/urlshotner');
const ppContent = mongoose.model('ppcontent');

exports.urlShortener = (req, res, next) => {
  // console.log(chalk.bgYellowBright("---------------- UrlShorter Information Submitted ----------------"));
  // console.log(req.body);
  // var totalCombination = req.body.url+"/"+req.body.description;
  var resD = cryptoRandomString({length: 10, type: 'base64'}); //characters: totalCombination
  req.body.id = resD;
  var urlShorten = new ppContent(req.body);
  urlShorten.save().then(resp => {
    res.status(201).send({
      message: 'Success',
      data: {
        "id": resD,
      }
    })
  }).catch(err => {
    res.status(400).send({
      message: 'Error',
      error: 'Empty Store'
    });
  });
};

exports.getAllInformation = (req, res, next) => {
  // console.log(chalk.bgYellowBright("---------------- Get All Submitted Information ----------------"));
  // console.log(req.body);
  ppContent.find({}, async( err, resp) => {
    if (Object.keys(resp).length) {
      var filterObj = [];
      resp.forEach((e) => {
        filterObj.push({
          id: e.id,
          url: e.url,
          description: e.description,
        });
      });
      res.status(200).send({
        message: 'Success',
        data: filterObj
      });
    } else if(err) {
      res.status(400).send({
        message: 'Err !!!',
        result: err
      });
    } else {
      res.status(400).send({
        message: "Error",
        error: "Empty Store"
      });
    }
  });
};

exports.fetchOne = (req, res, next) => {
  // console.log(chalk.bgYellowBright("---------------- UrlShorter Information Submitted ----------------"));
  ppContent.find({id: req.params.id}, async( err, resp) => {
    if (Object.keys(resp).length) {
      var filterObj = [];
      resp.forEach((e) => {
        filterObj.push({
          id: e.id,
          url: e.url,
          description: e.description,
        });
      });
      res.status(200).send({
        message: 'Success',
        data: filterObj
      });
    } else if(err) {
      res.status(400).send({
        message: 'Err !!!',
        result: err
      });
    } else {
      res.status(400).send({
        message: "Error",
        error: "Empty Store"
      });
    }
  });
};