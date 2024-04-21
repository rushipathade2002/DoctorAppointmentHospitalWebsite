const express = require("express");
const appointmentSchema = require("../validators/appointment_validate");
const validate = require("../middlewares/validate_middleware");
const { contactForm,appointmentForm } = require("../controllers/contact_controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();



router.route("/contact").post(contactForm);
router.route("/appointment").post(validate(appointmentSchema),authMiddleware, appointmentForm);


module.exports = router;

