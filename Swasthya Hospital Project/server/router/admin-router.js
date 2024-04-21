const express = require("express");
const multer = require("multer");
const path = require("path");
const adminMiddleware = require("../middlewares/admin-middleware");
const {getAllUsers,getAllContacts,getFacilities,addFacilities, deleteContact,deletePatient, addSlider,deleteSlider, deleteDoctor, getAllAppointments, deleteAppointment,addDoctor, getDoctors } = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");


const router = express.Router();


const storage = multer.diskStorage({
    destination:(req, res, cb)=>{
        cb(null, "public/uploads")
    },
    filename:(req, file, cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage:storage,
})



router.route("/users").get(authMiddleware,adminMiddleware,  getAllUsers);

router.route("/contacts").get(authMiddleware,adminMiddleware, getAllContacts);
router.route("/deleteContact/:id").delete(authMiddleware,adminMiddleware, deleteContact);

router.route("/appointments").get(authMiddleware,adminMiddleware, getAllAppointments);
router.route("/deleteAppointment/:id").delete(authMiddleware,adminMiddleware, deleteAppointment);

router.route("/deletePatient/:id").delete(authMiddleware,adminMiddleware, deletePatient);

router.route("/save_slider").post(authMiddleware,adminMiddleware, upload.single('slider_image'), addSlider);
router.route("/deleteSlide/:id").delete(authMiddleware,adminMiddleware, deleteSlider);

router.route("/saveDoctor").post(authMiddleware, adminMiddleware, upload.single('dr_image'), addDoctor);

router.route("/deleteDoctor/:id").delete(authMiddleware,adminMiddleware, deleteDoctor);
router.route("/doctors").get(getDoctors);

router.route("/save_facilities").post(authMiddleware,adminMiddleware, upload.single('service_image'), addFacilities);
router.route("/facilities").get( getFacilities)

module.exports = router;