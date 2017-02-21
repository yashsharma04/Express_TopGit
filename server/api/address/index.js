var express = require('express');
var router = express.Router();
var controller = require('./address.controller.js');
router.post('/insert',controller.insert);
router.get('/search',controller.search);
router.delete('/delete',controller.delete);
router.put('/update',controller.update);
module.exports = router ; 