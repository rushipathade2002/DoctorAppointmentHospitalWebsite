import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const AddFacility = () => {
    const { authorizationToken } = useAuth();
    const [facilities, setFacilities] = useState({
        title:"",
        description:"",
        service_link:"",
        service_image:"",
    });

    const handleInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFacilities({
            ...facilities,
            [name]: value,
        });
    }

    const handleFile = (e) => {
        setFacilities({
            ...facilities,
            [e.target.name]: e.target.files[0],
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', facilities.title);
        formData.append('description', facilities.description);
        formData.append('service_link', facilities.service_link);
        formData.append('service_image', facilities.service_image);

        const response = await fetch("http://localhost:5000/api/admin/save_facilities",{
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
            console.log(responseData)
            if( response.status == '201' ){
            toast.success("Facilities Added successfully");
            setFacilities({
                title:"",
                description:"",
                service_link:"", 
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
                            <h2>Add facilities</h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>facilities Name</label>
                                                    <input type="text" name="title" className="form-control" onChange={handleInput} value={facilities.title} placeholder="Enter title" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>facilities Description</label>
                                                    <input type="text" name="description" className="form-control" onChange={handleInput} value={facilities.description} placeholder="Enter description." />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>facilities Link</label>
                                                    <input type="text" name="service_link" className="form-control" onChange={handleInput} value={facilities.service_link} placeholder="Enter service_link" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>facilities Image</label>
                                                    <input type="file" name="service_image" className="form-control" accept="image/*" onChange={handleFile} />
                                                </div>
                                                <div className="col-12 justify-content-center mt-3 text-center">
                                                    <button type="submit">Save facilities</button>
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

export default AddFacility;
