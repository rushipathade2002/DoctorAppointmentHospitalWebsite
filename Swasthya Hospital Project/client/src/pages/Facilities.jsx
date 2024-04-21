import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFacilitiesData } from "../Redux/action";
import Nav from "./Nav";
import Footer from "./Footer";



export default function Facilities(){
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { facilities } = useSelector(store=>store.product)
    useEffect(()=>{
        dispatch(getFacilitiesData())
    },[])
    console.log(facilities);
    return(
        <>
       <Nav></Nav>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0 doctor_page_banner">
                        <h1 className="ml-5 pl-5">Facilities</h1>
                        <ul className="ml-5 pl-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Facilities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <NavLink to="/Doctor">
                <div className="row "> 
                {/* {facilities?.map((item, index)=>{
                    return(
                        <>
                        <div className="col-md-4 mt-5 facilities" key={index}>
                            <img src={`https://a2zithub.com/swasthyahospital/uploads/${item.service_image}`} className=" w-100" alt="" />
                            <div className="row facilities1">
                                <div className="col-md-12">
                                    <h4 className="">{item.title}</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center text-center">
                                    <p>{item.service_description}</p>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })} */}
                    
                   
                    <div className="col-md-4 mt-5 facilities">
                        <img src="https://www.swasthyahospital.com/img/gallery/icu.JPG" className=" w-100" alt="" />
                        <div className="facilities1">
                            <h4 className="">ICU</h4>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 facilities">
                        <img src="https://www.swasthyahospital.com/img/gallery/minor%20ot.JPG" className=" w-100" alt="" />
                        <div className="facilities1">
                            <h4 className="facilities5">Mirror OT</h4>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mt-5 facilities">
                        <img src="https://www.swasthyahospital.com/img/gallery/stress%20test.JPG" className=" w-100" alt="" />
                        <div className="facilities1">
                            <h4 className="facilities5">Stress Test</h4>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 facilities">
                        <img src="https://www.swasthyahospital.com/img/gallery/casualty.JPG" className=" w-100" alt="" />
                        <div className="facilities1">
                            <h4 className="facilities5">Cauallty</h4>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 facilities">
                        <img src="https://www.swasthyahospital.com/img/gallery/new%20opd.JPG" className=" w-100" alt="" />
                        <div className="facilities1">
                            <h4 className="facilities5">New OPD</h4>
                        </div>
                    </div>
                    
                </div>
                </NavLink>
            </div>
        </section>

        
                <Footer></Footer>
        </>
    )
}