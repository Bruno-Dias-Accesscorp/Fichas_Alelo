var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser")
var fichas = require("../controllers/fichaVeloeController")

/* GET home page. */
router.use(bodyParser.json())

router.get('/', fichas.veloe)

router.post('/', fichas.criar);

module.exports = router;
