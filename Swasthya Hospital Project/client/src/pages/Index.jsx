import React, { useEffect }  from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSliderData } from "../Redux/action";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Index(){

    const dispatch = useDispatch();
    const { slider } = useSelector(store=>store.product)
    useEffect(()=>{
        dispatch(getSliderData())
    },[dispatch])
         
    
    return(
        <>
            <Nav></Nav>
            <section className="bg-light">
                <div className="container-fluid p-0 m-0">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" key={1} className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" key={2} > </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" key={3} ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.swasthyahospital.com/img/slider/slide4-1.jpg" alt="First slide" />
                            </div>
                            
                            {
                                slider && slider.map((item, index)=>{
                                    return(
                                        <>
                                            <div className="carousel-item " key={index}>
                                                <img className="d-block w-100 ml-0 mr-0 pl-0 pr-0" src={`http://localhost:5000/uploads/${item.slider_img}`} key={index} alt={item.title}  />
                                            </div>
                                        </>
                                    )
                                })
                            }
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row pb-5" >
                        <div className="col-md-3 pl-0 pr-0 mt-2 card-info">
                            <div className="card pt-5 pb-5" >
                                <i className="fa-solid fa-user-doctor pb-2" ></i>
                            <div className="card-body">
                                <h5 className="card-title">Modern Hospital</h5>
                                <p className="card-text">Provide advanced & scientific, curative, preventive healthcare.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-3 pl-0  pr-0 mt-2 card-info">
                            <div className="card pt-5 pb-5 " >
                                <i className="fa-solid fa-user-graduate pb-2"></i>
                            <div className="card-body">
                                <h5 className="card-title">Expert Doctors</h5>
                                <p className="card-text">Give you the best treatment to cure your diseases.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-3 pl-0 pr-0 mt-2 card-info">
                            <div className="card pt-5 pb-5 " >
                                <i className="fa-solid fa-truck-medical pb-2"></i>
                            <div className="card-body">
                                <h5 className="card-title">Cardiac Ambulance</h5>
                                <p className="card-text">Patients suffering from cardiac diseases.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-3 pl-0 pr-0 mt-2 card-info">
                            <div className="card pt-5 pb-5" >
                                <i className="fa-solid fa-hospital pb-2"></i>
                            <div className="card-body">
                                <h5 className="card-title">Emergency</h5>
                                <p className="card-text">We work 24*7 to provide quality care at every moment</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pt-5">
                            <img src="https://www.swasthyahospital.com/img/about/about1.png" className="w-100" alt="" />
                        </div>
                        <div className="col-md-7">
                            <h1>Welcome To <span style={{"fontFamily":"fantasy","color":"#0840d0","letterSpacing":".1rem"}}>Swasthya</span> Hospital & MRC</h1>
                            <h5>This is a multispeciality Hospital in Ahmednagar which provides the highest standard of clinical expertise and nursing care by offering the latest technology, and state-of-the-art Hospital facilities.</h5><br/>
                            <p>Hospital provides wide range of medical services like OPD Services, IPD Services, Emergency Services, Cahsless Services with Various Organisation and Insurance Companies, diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery. Very highly trained and experienced doctors and medical staff members who treat patients with respect, kindness and dignity. Our staff members are always ready to deal with any kind of emergency. <br/><br/>
                                Swasthya Hospital provides perfect and soothing environment, comfortable patient stay, well managed safety and security, amongst other patient centric facilities .We provide rapid assessment, intervention and treatment for numerous common and complex conditions. Patients receive customized, individual care and prompt services is our hallmark. Cashless services with various organisations & Insurance companies. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" department-back"> 
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-12 d-flex justify-content-center pt-5 mt-5">
                        <h1 className="pb-3">Our Departments</h1>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <p>Dedicated Services</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-4 p-0">
                        <div className="gallery">
                            <div className="col-md-12 p-0 mb-2">
                                <div className="image mb-0 w-100">
                                <img src="https://www.swasthyahospital.com/img/department/department4.jpg"  alt="Imag 1" />
                                <div className="overlay">
                                    <NavLink to="/Cardiology"><button className="btn btn-outline-light text-white">Details</button></NavLink>
                                </div>
                                </div>
                                <NavLink to="/Cardiology"><button className="home-btn mt-0 pl-0 pt-2 pb-2 w-100 ml-2">Cardiology</button></NavLink>
                            </div>

                            <div className="col-md-12 p-0">
                                <div className="image mb-0 w-100">
                                <img src="https://www.swasthyahospital.com/img/department/department3.jpg"  alt="Imag 1" />
                                <div className="overlay">
                                    <NavLink to="/Gynecology"><button className="btn btn-outline-light text-white">Details</button></NavLink>
                                </div>
                                </div>
                                <NavLink to="/Gynecology"><button className="home-btn mt-0 pl-0 ml-0 w-100 ml-2 pt-2 pb-2">Obstetrics & Gynaecology</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12 p-4">
                                    <div className="card card-body">
                                        <div className="row p-2">
                                            <div className="col-4">
                                                <img src="https://www.swasthyahospital.com/img/team/team22.png" className="doctor_img rounded-circle mt-5 w-100" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h4>Dr. Abhijit Pathak</h4>
                                                <p>Consultant Cardiology</p>
                                                <h6 className="text-primary mb-3">M.D (Medicine), D.N.B, D.M (cardiology)</h6>
                                                <NavLink to="/Cardiology"><button className="btn btn-outline-primary mr-3 mb-3">View Profile</button></NavLink><br/>
                                                <NavLink to="/Cardiology"><button className="btn btn-primary mb-3">Make An Appointment</button></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 p-4">
                                    <div className="card card-body">
                                        <div className="row p-2">
                                            <div className="col-4">
                                                <img src="https://www.swasthyahospital.com/img/team/team23.png" className="doctor_img rounded-circle mt-5 w-100" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h4>Dr. Renuka A Pathak</h4>
                                                <p>Consultant Obstetrician, Gynaecologist</p>
                                                <h6 className="text-primary mb-3">M.D , DNB (OBGYN)</h6>
                                                <NavLink to="/Gynecology"><button className="btn btn-outline-primary mr-3 mb-3">View Profile</button></NavLink><br/>
                                                <NavLink to="/Gynecology"><button className="btn btn-primary mb-3">Make An Appointment</button></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            </section>

            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-5 mt-5 targetAmbulance">
                            <h2>Cardic Ambulance <br/>
                                <span> Emergency Service
                                Call: 0241 243 0530</span>
                            </h2>
                        </div>
                        <div className="col-md-6 p-5">
                            <img src="https://www.swasthyahospital.com/img/ambulance.jpg" className="pt-5 pb-5" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mixed-section">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mt-5 mb-5 p-3">
                                <h2>2559+ </h2> 
                                <p> Cardiac Surgery</p>
                            </div>
                            <div className="col-md-4 mt-5 mb-5 p-3">
                                 <h2>14709+</h2> 
                                <p> Happy Patients</p>
                            </div>
                            <div className="col-md-4 mt-5 mb-5 p-3">
                                <h2>56+ </h2>
                                <p>Quality Doctors & Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://www.swasthyahospital.com/img/figure/figure9.jpg" className="w-100" alt="" />
                        </div>
                        <div className="col-md-6 p-4">
                            <div className="p-0 ">
                            <h1>We are the trusted experts things simple</h1>
                            <p>Swasthya Hospital aims to achieve measurable excellence in delivery of healthcare to its clientele within identifiable ethical parameters. Hospital will strictly adhere to the highest established international standards of quality in its professional functioning.</p>
                            <h4>Vision</h4>
                            <p>"Affordable Quality Healthcare for the Masses Nationwide"</p>
                            <h4>Our Mission</h4>
                            <p>"A Dream of Making Quality Healthcare Accessible to the Masses Nationwide"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                   
           
            <Footer></Footer>
        
        </>
    )
}