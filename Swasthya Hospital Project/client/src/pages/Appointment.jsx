import React, { useState } from "react";
import { useAuth } from "./store/Auth";
import Footer from "./Footer";
import Nav from "./Nav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const defaultAppointment = {
    appointment_date: "",
    appointment_time: "",
    patient_name: "",
    patient_phone: "",
    patient_email: "",
    patient_address: "",
    doctor_name: "",
    message:""
}

const Appointment =()=>{
    const [appointment, setAppointment ] = useState(defaultAppointment);
    const [userData, setUserData] = useState(true);
    const navigate = useNavigate();
    const { user, authorizationToken } = useAuth();

    if(userData && user ){
        setAppointment({
            appointment_date: "",
            appointment_time: "",
            patient_name : user.username,
            patient_phone: user.phone,
            patient_email: user.email,
            patient_address: user.address,
            doctor_name: "",
            message:""
        });
        setUserData(false)
    }

    const handleInput = (e)=>{
        setAppointment({
           ...appointment,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/appointment",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    authorization:authorizationToken
                },
                body:JSON.stringify(appointment)
            });
            const res_data = await response.json();
            console.log(res_data);
            if(response.ok){
                toast.success("Appointment Booked Successfully Visit on Time...");
                // setAppointment(defaultAppointment);
                setAppointment({
                    appointment_date: "",
                    appointment_time: "",
                    patient_name : user.username,
                    patient_phone: user.phone,
                    patient_email: user.email,
                    patient_address: user.address,
                    doctor_name: "",
                    message:""
                });
                // navigate("/Facilities");
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Data Send Time Error",error);
        }

    }

    

    return(
        <>
        <Nav></Nav>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0 doctor_page_banner">
                        <h1 className="ml-5 pl-5">Book an Appointment </h1>
                        <ul className="ml-5 pl-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3"> Appointment </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-muted">Book Appointment </h2>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" name="patient_name" onChange={handleInput} defaultValue={appointment.patient_name} className="form-control p-4 " />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="email" name="patient_email" onChange={handleInput} defaultValue={appointment.patient_email} className="form-control p-4" />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>Appointment Date</label>
                                <input type="date" name="appointment_date" onChange={handleInput} placeholder="Appointment Date" defaultValue={appointment.appointment_date} className="form-control p-4" />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>Appointment Time</label>
                                <input type="time" name="appointment_time" onChange={handleInput} defaultValue={appointment.appointment_time} className="form-control p-4" />
                            </div>
                            
                            <div className="col-md-6 mt-3">
                                <input type="number" name="patient_phone" onChange={handleInput} defaultValue={appointment.patient_phone} className="form-control p-4" />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" name="patient_address" onChange={handleInput} defaultValue={appointment.patient_address} className="form-control p-4" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <select className="form-control" onChange={handleInput} name="doctor_name" >
                                    <option defaultValue=""  selected> Choose Doctor</option>
                                    <option defaultValue="Dr. Abhijit Pathak" >Dr. Abhijit Pathak</option>
                                    <option defaultValue="Dr. Renuka A Pathak">Dr. Renuka A Pathak</option>
                                </select>
                            </div> 
                            <div className="col-md-12 mt-3">
                                <textarea className="form-control"  rows="5" name="message" defaultValue={appointment.message} onChange={handleInput} placeholder="Message * "></textarea>
                            </div>
                            <div className="col-md-12 mt-3 mb-4">
                                <button className="btn btn-primary btn-lg">Book Appointment</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-5 policy-table ">
                        <img src="/images/appointment5.png" className="w-100 h-100 pt-5 "  alt="" />
                    </div>
                </div>
            </div>
        </section>
         
        <Footer></Footer>

        </>
    )
}

export default Appointment;