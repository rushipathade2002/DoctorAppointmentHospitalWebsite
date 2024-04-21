const {Schema, model } = require ('mongoose');

const ContactUsSchema = new Schema({
    username :{
        type:String,
        required:true,
        
    },
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,

    },
    phone :{
        type:String,
        required:true,
    },
    address :{
        type:String,
        required:true,
    },
    message :{
        type:String,
        required:true,
    }
});

// create a model or a Collection
const Contact = new model('Contact', ContactUsSchema);

module.exports= Contact;