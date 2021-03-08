const mongoose = require('mongoose');
const chalk = require('chalk');
const shortUrl = require('node-url-shortener');
require('../models/urlshotner');
const ppContent = mongoose.model('ppcontent');

exports.urlShortener = (req, res, next) => {
  // console.log(chalk.bgYellowBright("---------------- UrlShorter Information Submitted ----------------"));
  // console.log(req.body);
  shortUrl.short(req.body.url, function(err, url) {
    if(!err) {
      req.body.shortedUrl = url;
      var urlShorten = new ppContent(req.body);
      urlShorten.save().then(resp => {
        var istDateCreatedAt = new Date((resp.createdAt).toString());
        var istDateUpdatedAt = new Date(resp.updatedAt);
        res.send({
          message: 'UrlShorted Information Saved in database !!',
          status: 201,
          data: {
            "originalUrl": resp.url,
            "shortedUrl": resp.shortedUrl,
            "createdAt": istDateCreatedAt,
            "updateAt": istDateUpdatedAt
          }
        })
      }).catch(err => {
        res.status(400).send({
          message: 'Update Failed !!',
          status: 400,
          err: err
        });
      });
    } else {
      res.status(400).send({
        message: 'Update Failed !!',
        status: 400,
        err: err
      });
    }
  });
  
};

exports.getAllInformation = (req, res, next) => {
  // console.log(chalk.bgYellowBright("---------------- Get All Submitted Information ----------------"));
  // console.log(req.body);
  ppContent.find({}, async( err, resp) => {
    if (Object.keys(resp).length) {
      var filterObj = {};
      resp.forEach((e) => {
        filterObj['url'] = e.url;
        filterObj['shortedUrl'] = e.shortedUrl;
        filterObj['createdAt'] = e.createdAt;
        filterObj['updatedAt'] = e.updatedAt;
      });
      res.send({
        status: 200,
        message: 'Success !!',
        data: resp
      });
    } else if(err) {
      res.send({
        status: 400,
        message: 'Err !!!',
        result: err
      });
    } else {
      res.send({
        status: 200,
        message: 'No, Data found !!'
      });
    }
  });
};