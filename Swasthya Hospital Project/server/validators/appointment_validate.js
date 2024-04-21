const {z} = require('zod');


const appointmentSchema = z.object({
    patient_name: z
    .string({required_error:"name is Required"})
    .trim()
    .min(3, {message:"name must be at least of 3 Character"})
    .max(255, {message:"name must not be more than of 255 Character"}),

    patient_phone: z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10, {message:"phone must be at least of 10 Character"})
    .max(20, {message:"phone must not be more than of 20 Character"}),

    patient_email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(5, {message:"Email must be at least of 5 Character"})
    .max(255, {message:"Email must not be more than of 255 Character"}),

    patient_address: z
    .string({required_error:"Patient Address is Required"})
    .trim()
    .min(10, {message:"address must be at least of 10 Character"})
    .max(250, {message:"address must not be more than of 250 Character"}),

    appointment_date: z
    .string({required_error:"Appointment Date is Required"}),

    appointment_time: z
    .string({required_error:"Appointment Time is Required"}),

    doctor_name: z
    .string({required_error:"Doctor not Selected"})
    .trim(),

    message:z.string({required_error:"message is Required"})
    .trim()
    .min(10, {message:"message must be at least of 10 Character"}),


});



module.exports = appointmentSchema;