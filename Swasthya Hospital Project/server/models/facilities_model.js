const { Schema, model} = require("mongoose");

const facilitiesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    service_link: {
        type:String,
        required:true
    },
    service_image: {
        type:String,
    }
    
},
{
    timestamps:true
});

const Facilities = new model ("Facilities", facilitiesSchema);

module.exports = Facilities;