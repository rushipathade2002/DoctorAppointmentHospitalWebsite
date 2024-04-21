import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const defaultDoctor = {
        dr_name:"",
        dr_position:"",
        dr_degree:"",
        dr_image:"",
}

const AddDoctor = () => {
    const { authorizationToken } = useAuth();
    const [doctor, setDoctor] = useState(defaultDoctor);
    const navigate = useNavigate();

    const handleInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDoctor({
            ...doctor,
            [name]: value,
        });
    }

    const handleFile = (e) => {
        setDoctor({
            ...doctor,
            [e.target.name]: e.target.files[0],
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('dr_name', doctor.dr_name);
        formData.append('dr_position', doctor.dr_position);
        formData.append('dr_degree', doctor.dr_degree);
        formData.append('dr_image', doctor.dr_image);

        const response = await axios.post("http://localhost:5000/api/admin/saveDoctor", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: authorizationToken
            }
        });

        const res_data = response.data;
        if( response.status == '201' ){
            toast.success("Doctor Added successful");
            setDoctor(defaultDoctor)
            navigate("/admin/Doctors")
            // window.location.reload();
        }else{
             toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
        
    }

    return (
        <>
            <div className="wide_line"></div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Add Doctor</h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Doctor Name</label>
                                                    <input type="text" name="dr_name" className="form-control" onChange={handleInput} value={doctor.dr_name} placeholder="Enter Doctor Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Position</label>
                                                    <input type="text" name="dr_position" className="form-control" onChange={handleInput} value={doctor.dr_position} placeholder="Enter Doctor Position..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Degree</label>
                                                    <input type="text" name="dr_degree" className="form-control" onChange={handleInput} value={doctor.dr_degree} placeholder="Enter Doctor Degree" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Image</label>
                                                    <input type="file" name="dr_image" className="form-control" accept="image/*" onChange={handleFile} />
                                                </div>
                                                <div className="col-12 justify-content-center mt-3 text-center">
                                                    <button type="submit">Save Doctor</button>
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

export default AddDoctor;

