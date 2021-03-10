const chalk = require('chalk');

// Validate API
exports.validateAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    // console.log();
    // console.log(req.body);
    // console.log();
    var error = '';
    if(req.body.url === undefined || req.body.url === '') {
        console.log(chalk.red('url is missing'));
        error += "url, "
    } if(req.body.description === undefined || req.body.description === '') {
      console.log(chalk.red('description is missing'));
      error += "description, "
    }
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        })
    } else {
      next();
    }
};

exports.fetchSingleDataValidateAPI = (req, res, next) => {
  // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    // console.log();
    // console.log(req.body);
    // console.log();
    var error = '';
    var uniqueId = req.params.id;
    if(uniqueId === undefined || uniqueId === '') {
        console.log(chalk.red('id is missing'));
        error += "id, "
    }
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        })
    } else {
      next();
    }
}