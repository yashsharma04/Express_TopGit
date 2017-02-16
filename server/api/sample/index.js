var express = require('express');
var router = express.Router(); 
var controller = require('./sample.controller');
router.post('/submitData',controller.submit);
router.get('/showData',controller.show);

module.exports = router ;