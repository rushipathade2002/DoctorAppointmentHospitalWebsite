import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/uploads/"
const DoctorList = ()=>{

    const [data, setData] = useState([]);
    const {  authorizationToken } = useAuth();

    useEffect(()=>{
        getAllDoctors();
    },[]);

    const getAllDoctors = async()=>{
         const response = await fetch("http://localhost:5000/api/admin/doctors", {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization : authorizationToken
                },
            });
        const doctor = await response.json();
        setData(doctor);
    }

    const deleteDoctor=async (id)=>{
            try {
               const response = await fetch(`http://localhost:5000/api/admin/deleteDoctor/${id}`,{
                     method:"DELETE",
                     headers:{
                            "Content-Type":"application/json",
                            authorization:authorizationToken,
                            }
                        });
                     if(!response.success) {
                             toast.error(response.message);
                         }
                         getAllDoctors();
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
                            <h2>Doctor List </h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-11 mt-3">
                            <div className="table">
                                <table className="table-stripped table-responsive w-100">
                                    <thead>
                                        <th> SN </th>
                                        <th> Name </th>
                                        <th> Position </th>
                                        <th> Doctor Degree </th>
                                        <th> Image </th>
                                        <th>Action</th>
                                    </thead>
                                    { data && data.length === 0 && (
                                        <tr>
                                            <td colSpan="10">No Doctor Found</td>
                                        </tr>
                                    )}
                                    { data && data.map((elemt,index)=>{
                                        let { _id, dr_name, dr_position, dr_degree, dr_image } = elemt;
                                        return(
                                            <>
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{dr_name}</td>
                                                    <td>{dr_position}</td>
                                                    <td>{dr_degree}</td>
                                                    <td><img src={`${URL}${dr_image}`} width={150} height={250} className="h-50"   alt={dr_name} /></td>
                                                    <td><button className="btn btn-danger" onClick={()=>{
                                                        if(window.confirm("Are you sure you want to Delete")){
                                                            deleteDoctor(_id);    
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


export default DoctorList;