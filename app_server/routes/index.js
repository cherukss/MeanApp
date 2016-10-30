var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeCtrl.landing);

module.exports = router;
