var express = require('express');
var router = express.Router();
var controller = require('./address.controller.js');
router.post('/insert',controller.insert);
module.exports = router ; 