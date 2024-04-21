import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";


export const AppointmentList = ()=>{

    const [data, setData] = useState([]);
    const { authorizationToken } = useAuth();

    useEffect(()=>{
        getAllAppointments();
    },[]);

    const getAllAppointments = async()=>{
         const response = await fetch("http://localhost:5000/api/admin/appointments", {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization : authorizationToken
                },
            });
            const appointment = await response.json();
            console.log(appointment.length);
            setData(appointment);
        
    }
    
    const deleteContact=async (id)=>{
            try {
               const response = await fetch(`http://localhost:5000/api/admin/deleteAppointment/${id}`,{
                     method:"DELETE",
                     headers:{
                            "Content-Type":"application/json",
                            authorization:authorizationToken,
                            }
                        });
                     if(!response.success) {
                             toast.error(response.message);
                         }
                         getAllAppointments();
                         toast.success("Deleted Appointment Successfully");
                
                                                           
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <>
            <div className="wide_line"></div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Appointment Patient List </h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-11 mt-3">
                            <div className="table">
                                <table className="table-stripped table-responsive w-100">
                                    <thead>
                                        <th> SN </th>
                                        <th> Name </th>
                                        <th> Email </th>
                                        <th> Mobile </th>
                                        <th> Address </th>
                                        <th> Doctor Name</th>
                                        <th> Date </th>
                                        <th> Time </th>
                                        <th> Message AP </th>
                                        <th>Action</th>
                                    </thead>
                                    { data && data.length === 0 && (
                                        <tr>
                                            <td colSpan="10">No Appointments Found</td>
                                        </tr>
                                    )}
                                    { data && data.map((elemt,index)=>{
                                        let { _id, patient_name, patient_phone, patient_email, patient_address, doctor_name, appointment_date, appointment_time, message } = elemt;
                                        return(
                                            <>
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{patient_name}</td>
                                                    <td>{patient_email}</td>
                                                    <td>{patient_phone}</td>
                                                    <td>{patient_address}</td>
                                                    <td>{doctor_name}</td>
                                                    <td>{appointment_date}</td>
                                                    <td>{appointment_time}</td>
                                                    <td>{message}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{
                                                        if(window.confirm("Are you sure you want to Delete")){
                                                            deleteContact(_id);    
                                                        }
                                                    }}><MdDelete /></button></td>
                                                </tr>
                                            </>
                                        )   
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}