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
        console.log(chalk.red('url is missing !! urlshortener data cant submit without url'));
        error += "url, "
    }
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' required'
        })
    } else {
      next();
    }
};