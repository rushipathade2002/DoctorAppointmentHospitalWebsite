import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "./Nav";
import Footer from "./Footer";
import { useAuth } from "./store/Auth";

const defaultContact = {
            username:"",
            email:"",
            phone:"",
            address:"",
            message:"",
        }

export default function ContactUs(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState(defaultContact);
    const [check, setCheck] = useState(true);
    const { user } = useAuth();

    if(check && user){
        setUserData({
            username: user.username,
            email: user.email,
            phone: user.phone,
            address: user.address,
            message: "",
        });
        setCheck(false)
    }
    console.log(userData);
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUserData({
            ...userData,
            [name]:value,
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/form/contact", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        console.log(response);
        const res_data = await response.json();
        if(response.ok){
            toast.success("Your message has been sent!");
            setUserData(defaultContact)
            navigate("/Contact");

        }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
    }


    return(
        <>  
        <Nav></Nav>
           
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0 doctor_page_banner">
                        <h1 className="ml-5 pl-5">Contact Us</h1>
                        <ul className="ml-5 pl-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.144413021304!2d74.734677!3d19.104488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07d76ddc4a1%3A0x7e8a5d2a19c41a33!2sSwasthya%20Hospital%20And%20Medical%20Research%20Center!5e0!3m2!1sen!2sin!4v1711271303107!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Leave Us Message</h2>
                            </div>
                            
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="Full Name*" name="username" className="form-control p-4" onChange={handleInput} defaultValue={userData.username}  />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="Email *" className="form-control p-4" name="email" required autoComplete="off" defaultValue={userData.email} onChange={handleInput}/>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="Phone *" className="form-control p-4" name="phone" onChange={handleInput} defaultValue={userData.phone} />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="address *" name="address" className="form-control p-4" onChange={handleInput} defaultValue={userData.address} />
                            </div> 
                            <div className="col-md-12 mt-3">
                                <textarea className="form-control"  rows="5" placeholder="Message *" name="message" onChange={handleInput} defaultValue={userData.message} ></textarea>
                            </div>
                            <div className="col-md-12 mt-3 mb-4">
                                <button className="btn btn-primary btn-lg">Send Message</button>
                            </div>
                            
                        </div>
                        </form>
                    </div>
                    <div className="col-md-4 policy-table ">
                        <h1>Address</h1>
                        <div className="sm-line"></div>
                        <ul type="none" className="pl-0">
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-location-dot"></i> Annabhau Sathe Chowk, Laltaki, Ahmednagar, Maharashtra 414001</li>
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-envelope"></i> swasthyahospitalcashless@gmail.com</li>
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-phone"></i> 0241-2344301, 2341311, 2430530</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>

        </>
    )
}