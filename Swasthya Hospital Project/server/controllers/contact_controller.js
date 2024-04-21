const Contact = require("../models/contact_model");
const Appointment = require("../models/appointment_model");


const contactForm = async (req, res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message send Successfully"});
    } catch (error) {
        return res.status(200).json({message:"message not delivered"});
    }
}



const appointmentForm = async (req, res) => {
    try {
        const {doctor_name, appointment_date,appointment_time,patient_name,patient_phone,patient_email, patient_address, message } = req.body;
        const bookAppointment = await Appointment.create({doctor_name, appointment_date,appointment_time,patient_name,patient_phone,patient_email, patient_address, message });
        if(bookAppointment){
            return res.status(201).json({message:"Appointment Booked Successfully"});
        }
        
        return res.status(200).json({message:"Appointment Booked Successfully"});
        
    } catch (error) {
        return res.status(404).json({message:"Appointment not Book"});
    }
}

module.exports = { 
    contactForm,
    appointmentForm
}