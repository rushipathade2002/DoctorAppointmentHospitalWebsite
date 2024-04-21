const express = require('express');
var { services,getSlider } = require("../controllers/service-controller");
// const multer = require("multer");
const router = express.Router();


router.route('/service').get(services);
router.route("/").get(services);
router.route("/sliders").get( getSlider);



module.exports = router;