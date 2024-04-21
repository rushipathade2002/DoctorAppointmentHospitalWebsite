const { Schema, model} = require("mongoose");

const sliderSchema = new Schema({
    slider_title: {
        type: String,
        required: true
    },
    
    slider_description: {
        type: String,
        required: true
    },
    slider_link: {
        type:String,
        required:true
    },
    slider_img: {
        type:String,
    }
    
},
{
    timestamps:true
});

const Slider = new model ("Slider", sliderSchema);

module.exports = Slider;