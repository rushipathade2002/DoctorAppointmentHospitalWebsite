import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const AddSlider = () => {
    const { authorizationToken } = useAuth();
    const [slider, setSlider] = useState({
        slider_title:"",
        slider_description:"",
        slider_link:"",
        slider_image:"",
    });

    const handleInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSlider({
            ...slider,
            [name]: value,
        });
    }

    const handleFile = (e) => {
        setSlider({
            ...slider,
            [e.target.name]: e.target.files[0],
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('slider_title', slider.slider_title);
        formData.append('slider_description', slider.slider_description);
        formData.append('slider_link', slider.slider_link);
        formData.append('slider_image', slider.slider_image);

        const response = await fetch("http://localhost:5000/api/admin/save_slider",{
            method: "POST",
            headers: {
                Authorization: authorizationToken
            },
            body: formData
        });
        
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message); // Throw an error if response is not successful
            }
            if( response.status == '201' ){
            toast.success("Doctor Added successful");
            setSlider({
                slider_title:"",
                slider_description:"",
                slider_link:"", 
                slider_img:"" 
            });
            // navigate("/admin/Doctors")
            // window.location.reload();
        }else{
             toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
        }
    }

    return (
        <>
            <div className="wide_line"></div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Add slider</h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Slider Name</label>
                                                    <input type="text" name="slider_title" className="form-control" onChange={handleInput} value={slider.slider_title} placeholder="Enter slider_title" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Slider Description</label>
                                                    <input type="text" name="slider_description" className="form-control" onChange={handleInput} value={slider.slider_description} placeholder="Enter slider_description." />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Slider Link</label>
                                                    <input type="text" name="slider_link" className="form-control" onChange={handleInput} value={slider.slider_link} placeholder="Enter slider_link" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Slider Image</label>
                                                    <input type="file" name="slider_image" className="form-control" accept="image/*" onChange={handleFile} />
                                                </div>
                                                <div className="col-12 justify-content-center mt-3 text-center">
                                                    <button type="submit">Save Slider</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddSlider;
