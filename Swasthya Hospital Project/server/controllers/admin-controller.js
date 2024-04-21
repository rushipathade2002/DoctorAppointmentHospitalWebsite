const User = require("../models/user_model");
const Contact = require("../models/contact_model");
const Slider = require("../models/slider-model");
const Appointment = require("../models/appointment_model");
const Doctor = require("../models/doctor_model");
const Facilities = require("../models/facilities_model");


const getAllUsers = async (req, res )=>{
    try {
        const users = await User.find({},{password:0});
        if(!users || users.length === 0 ) {
            res.status(404).send({message:"Users not Found"});
        }
        res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res )=>{
    try {
        const contacts = await Contact.find();
        res.setHeader("Content-Type","application/json; charset=utf-8");
        console.log(contacts);
        if(!contacts || contacts.length === 0 ) {
            res.setHeader('Content-Type', 'application/json');
            res.status(404).json({message:"contacts not Found"});
        }
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const deleteContact =async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Contact.find();
        if(!response.success){
            res.status(404).json({message: "Contact Not Found"});
        }
        await Contact.deleteOne({_id:id})
        res.status(200).json({message: "Contact Deleted Successfully"});
    } catch (error){ 
        res.status(404).json({message: error.message});
    }
}


const addSlider = async (req, res)=>{
    try {
        const { slider_title, slider_description, slider_link } = req.body;
        const slider_img = req.file.filename;
        const addedSlider = await Slider.create({ slider_title, slider_description, slider_link, slider_img });
        if(addedSlider){
            res.status(201).json({message:"Slider created successfully",slider:addedSlider});
        }
    } catch (error) {
        res.status(404).json({message: "page not found"});
    }
}

const addFacilities = async (req, res)=>{
    try {
        const { title, description, service_link } = req.body;
        const service_image = req.file.filename;
        const addedService = await Facilities.create({ title, description, service_link, service_image });
        if(addedService){
            res.status(201).json({message:"Slider created successfully",slider:addedService});
        }
        console.log(req.file)
        console.log(req.body);
    } catch (error) {
        res.status(404).json({message: "page not found"});
    }
}

const getFacilities = async (req, res)=>{
    try {
        const Facility = await Facilities.find();
        if(!Facility || Facility.length === 0 ) {
            res.status(404).send({message:"Facility not Found"});
        }
        res.status(200).json(Facility);
    } catch (error) {
        res.status(404).json({message: "page not found"});
    }
}

const deleteSlider = async (req, res) =>{
        try {
            const id = req.params.id;
            await Slider.deleteOne({_id: id});
            res.status(200).json({message:"Slider Deleted Successfully"});
        } catch (error) {
            res.status(404).json({message: "page not found"});  
        }
}



const getAllAppointments = async (req, res)=>{
    try {
        const appointments = await Appointment.find();
        if(!appointments || appointments.length === 0 ) {
            res.status(404).send({message:"Appointments not Found"});
        }
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({message: "page not found"});
    }
}

const getDoctors = async (req, res)=>{
    try {
        const doctors = await Doctor.find();
        if(!doctors || !doctors.length===0){
            res.status(404).send({message:"Doctors not Found"});
        }
        res.status(200).send(doctors);

    } catch (error) {
        res.status(404).json({message: "page not found"});
    }
}

const deleteAppointment = async (req, res)=>{
    try {
        const id = req.params.id;
        await Appointment.deleteOne({_id:id});
        res.status(200).json({message:"Deleted Appointment Successfully"});
    } catch (error) {
        res.status(404).json({message:"Page Not Found"});
    }
}


const addDoctor = async (req, res)=>{
    try {
        const { dr_name, dr_position, dr_degree } = req.body;
        const dr_image = req.file.filename;
        const addedDoctor = await Doctor.create({ dr_name, dr_position, dr_degree, dr_image });
        if(addedDoctor){
            res.status(201).json({message:"Doctor Added successfully",doctor:addedDoctor});
        }
    } catch (error) {
        res.status(404).json({message: "page not found"});
    }   
}


const deleteDoctor = async (req, res)=>{
    try {
        const id = req.params.id;
        await Doctor.deleteOne({_id:id});
        res.status(200).json({message:"Deleted Doctor Successfully"});
    } catch (error) {
        res.status(404).json({message:"Page Not Found"});
    }
}

const deletePatient = async (req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        res.status(200).json({message:"Deleted Patient Successfully"});
    } catch (error) {
        res.status(404).json({message:"Page Not Found"});
    }
}




module.exports = {
    getAllUsers, 
    getAllContacts, 
    deleteContact,
    addSlider, 
    getAllAppointments,
    deleteAppointment,
    addDoctor,
    deleteDoctor,
    deletePatient,
    getDoctors,
    deleteSlider,
    addFacilities,
    getFacilities
};