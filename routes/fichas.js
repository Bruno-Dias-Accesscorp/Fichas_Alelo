var express = require('express');
var router = express.Router();
var fichas = require("../controllers/fichasController")

/* GET home page. */
router.get('/', fichas.F1)

module.exports = router;
