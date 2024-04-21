const { Schema, model} = require("mongoose");

const appointmentSchema = new Schema({
    doctor_name:{
        type: String,
        required: true
    },
    appointment_date: {
        type: String,
        required: true
    },
    appointment_time: {
        type: String,
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    patient_phone: {
        type: String,
        required: true
    },
    patient_email: {
        type: String,
        required: true
    },
    patient_address: {
        type: String,
        required: true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
}
)

const appointments = new model ("Appointment", appointmentSchema)


module.exports = appointments;

