const { Schema, model} = require("mongoose");

const doctorSchema = new Schema({
    dr_name: {
        type: String,
        required: true
    },
    
    dr_position: {
        type: String,
        required: true
    },
    dr_degree: {
        type:String,
        required:true
    },
    dr_image: {
        type:String,
    }
    
},
{
    timestamps:true
});

const Doctor = new model ("Doctor", doctorSchema);

module.exports = Doctor;