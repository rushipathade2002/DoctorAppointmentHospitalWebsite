 const Service = require("../models/service-model");
 const Slider = require("../models/slider-model");


const services = async (req, res) => {
    try {
        const response = await Service.find();
        if(!response){
            res.status(404).send({message:"Data not Found"});
        }
        res.status(200).send({message:response});
    } catch (error) {
        console.log("services ",error);
    }
}

const getSlider = async (req, res)=>{
    try {
        const slider = await Slider.find();
        if(!slider){
            res.status(404).send({message:"Data not Found"});
        }
        res.status(200).json(slider);
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = {
    services,
    getSlider
};