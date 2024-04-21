import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsData } from "../Redux/action";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useAuth } from "./store/Auth";

const URL = "http://localhost:5000/uploads"

export default function Doctor(){
    const dispatch = useDispatch();
    const { doctors } = useSelector( store=>store.product )
    // const { doctors } = useAuth();
         
    useEffect(()=>{
        dispatch(getDoctorsData());

    },[]);


    return(
        <>
           <Nav></Nav>
            <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0  doctor_page_banner">
                        <h1 className="ml-5 pl-5 ">All Doctors</h1>
                        <ul className="pl-5 ml-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Doctors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row mt-3 mb-3">
                    {doctors && doctors?.map((item, index)=>{
                        const { dr_name, dr_position, dr_degree, dr_image } = item;
                        return(
                            <div className="col-md-6 mt-4" key={index}>
                                <div className="card card-body">
                                    <div className="row p-2">
                                        <div className="col-4">
                                            <img src={`${URL}/${ dr_image }`} className="doctor_img rounded-circle mt-5 w-100" alt="" />
                                        </div>
                                        <div className="col-8">
                                            <h4>{ dr_name }</h4>
                                            <p>{ dr_position }</p>
                                            <h6 className="text-primary mb-3">{ dr_degree }</h6>
                                            <NavLink to="/"><button className="btn btn-outline-primary mr-3 mb-3">View Profile</button></NavLink>
                                            <NavLink to="/Appointment"><button className="btn btn-primary mb-3">Make An Appointment</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                    

                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-12">
                        <h4>Panel Consultant</h4>
                        <div className="line"></div>
                        <div style={{'color':'black', 'fontSize':'17px', 'paddingTop':'20px'}}> 1)	Dr Saiprasad shinde.	(DM Nephrologist)</div>
                    </div>
                </div>
            </div>


        </section>

        <Footer></Footer>
        </>
    )
}