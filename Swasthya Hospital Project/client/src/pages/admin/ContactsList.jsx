import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const ContactsList = () => {
        
    const [data, setData] = useState([]);
    const {  authorizationToken } = useAuth();

    useEffect(()=>{
        getAllContacts();
    },[]);

    const getAllContacts = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/admin/contacts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: authorizationToken,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch contacts"); // Throw an error if response is not successful
        }

        const contacts = await response.json();
        setData(contacts); // Update state with fetched data
    } catch (error) {
        console.error(error);
        toast.error("Failed to fetch contacts"); // Display error message using toast
    }
};


    const deleteContact = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/admin/deleteContact/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: authorizationToken,
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message); // Throw an error if response is not successful
        }

        toast.success("Deleted Contact Successfully");
        getAllContacts(); // Fetch updated contact list after successful deletion
    } catch (error) {
        console.error(error);
        toast.error(error.message); // Display error message using toast if request fails
    }
};





    // console.log(contactUs);
    return (
        <>
            <div className="wide_line"></div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact Us List </h2>
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
                                        <th> Message AP </th>
                                        <th>Action</th>
                                    </thead>
                                    { data && data.length === 0 && (
                                        <tr>
                                            <td colSpan="10">No Contacts Found</td>
                                        </tr>
                                    )}
                                    { data && data?.map((elemt,index)=>{
                                        let {_id, username, email, phone, address, message } = elemt;
                                        return(
                                            <>
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{username}</td>
                                                    <td>{email}</td>
                                                    <td>{phone}</td>
                                                    <td>{address}</td>
                                                    <td>{message}</td>
                                                    <td><button className="btn btn-danger " onClick={()=>{
                                                        if(window.confirm("Are you sure you want to Delete Contact")){
                                                            deleteContact(_id);
                                                        }
                                                    }}>Delete</button></td>
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

export default ContactsList;
