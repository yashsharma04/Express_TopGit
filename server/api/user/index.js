var express = require('express');
var router = express.Router();
var controller = require('./user.controller');
router.post('/insert',controller.insert);
module.exports = router ; 