import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "react-toastify";



const Patients = ()=>{

    const [patient, setPatient] = useState([]);
    const { authorizationToken } = useAuth()


    useEffect(()=>{
        getAllPatients();
    },[]);


    const getAllPatients = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization : authorizationToken
                },

            });
            
            if(response.ok){
                const data = await response.json();
                setPatient(data);
                
            }else{
                console.log("Error fetching user Data");
            }
        } catch (error) {
            console.error("error fetching patient data");
        }
    }
    
     const deletePatient=async (id)=>{
            try {
               const response = await fetch(`http://localhost:5000/api/admin/deletePatient/${id}`,{
                     method:"DELETE",
                     headers:{
                            "Content-Type":"application/json",
                            authorization:authorizationToken,
                            }
                        });
                     if(!response.success) {
                             toast.error(response.message);
                         }
                         getAllPatients();
                         toast.success("Deleted Patient Successfully");
                
                                                           
            } catch (error) {
                console.log(error);
            }
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Register Patients </h2>
                        </div>
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <th>S.N.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </thead>
                                { patient && patient.length === 0 && (
                                        <tr>
                                            <td colSpan="10">No Patient Found</td>
                                        </tr>
                                    )}
                                {
                                    patient && patient.map((elemt, index)=>{
                                        let { _id, username, email, phone, address } = elemt;
                                        return(
                                            <>
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{username}</td>
                                                    <td>{email}</td>
                                                    <td>{phone}</td>
                                                    <td>{address}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{
                                                        if(window.confirm("Are you sure you want to Delete Patient?")){
                                                            deletePatient(_id);
                                                        }
                                                    }}><FaDeleteLeft /></button></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Patients;