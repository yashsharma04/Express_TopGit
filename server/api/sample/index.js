var express = require('express');
var router = express.Router(); 
var controller = require('./sample.controller');
console.log(typeof(controller));
router.post('/submitData',controller);

module.exports = router ;