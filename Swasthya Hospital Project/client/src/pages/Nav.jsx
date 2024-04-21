import React from "react";
// import './style.css'
import { NavLink } from "react-router-dom";
import { useAuth } from "./store/Auth";

export default function Nav() {
    const { isLoggedIn, admin } = useAuth(); 
    return(
        <>
        <section className="p-0 m-0">
            <div className="container-fluid color_format_back p-0 m-0">
                <div className="row">
                    <div className="col-md-8">
                        <ul>
                            <li className="d-inline-block ml-2 mt-3 text-white"><i className="fa-solid fa-envelope mr-1"></i> swasthyahospital@gmail.com</li>
                            <li className="d-inline-block ml-2 mt-3 text-white"><i className="fa-solid fa-phone mr-1"></i> 02410 243 0530 </li>
                            <li className="d-inline-block ml-2 mt-3 text-white"><i className="fa-solid fa-clock mr-1"></i> Emergency 24 x 7</li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <ul>
                            <li className="d-inline-block ml-4 mt-3 text-white">Marathi | English</li>
                            <a href="https://www.linkedin.com/in/rushikesh-pathade-187950200/" target="_blank"><li className="d-inline-block ml-3 mt-3 text-white"><i className="fa-brands fa-linkedin"></i></li></a>
                            <a href="/"><li className="d-inline-block ml-3 mt-3 text-white"><i className="fa fa-twitter"></i></li></a>
                            <a href="/"><li className="d-inline-block ml-3 mt-3 text-white"><i className="fa fa-youtube"></i></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
            <section className="bg-light">
             <div className="container pt-2 pb-2 pr-0  ">
                <div className="row">
                    <div className="col-5 col-md-2 ">
                        <img src="https://www.swasthyahospital.com/img/logo.png" className="mt-3 w-100" alt="logo" />
                    </div>
                    <div className="col-7 col-md-8 d-flex justify-content-end">
                        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
                            <button className="navbar-toggler mt-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/Gynecology" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Department
                                    </NavLink>
                                    <div className="dropdown-menu">
                                    <NavLink className="dropdown-item" to="/Cardiology">Cardiologist</NavLink>
                                    <NavLink className="dropdown-item" to="/Gynecology">Obstetrician, Gynecology</NavLink>
                                    <NavLink className="dropdown-item" to="/Medicine">Medicine</NavLink>
                                    <NavLink className="dropdown-item " to="/Cashless">Cashless</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Facilities">Facilities</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Doctor">Doctor</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Contact">ContactUs</NavLink>
                                </li>
                                {
                                    isLoggedIn ? 
                                    (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                                </li>
                                ):
                                (  
                                   <li></li>
                                )
                                }
                                </ul>
                            </div>
                            </nav>
                    </div>
                    <div className="col-md-2  d-none d-md-block pr-0 mr-lg-0" >
                             {
                                isLoggedIn ? (admin ? (<div className=" d-flex text-end">
                                    <NavLink to="/admin"><button className="btn btn-lg color_format_back mt-3 text-white">Admin </button></NavLink>
                                </div> )
                                 :(<div className=" d-flex text-end">
                                    <NavLink to="/Appointment"><button className="btn btn-lg color_format_back mt-3 text-white">Appointment</button></NavLink>
                                </div>
                            ) ) :
                            (
                                <div className=" d-flex text-end">
                                    <NavLink to="/Login"><button className="btn  color_format_back mt-3 text-white font-weight-bold">Login</button></NavLink>
                                    <NavLink to="/Register"><button className="btn ml-2 color_format_back text-white font-weight-bold mt-3 " >Register</button></NavLink>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}