import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";



export default function Cardiology(){
    return(
        <>
            <Nav></Nav>
            <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0  doctor_page_banner">
                        <h1 className="ml-5 pl-5 ">Cardiology Department</h1>
                        <ul className="pl-5 ml-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3"> Departments</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Cardiology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       <section className="bg-light">
            <div className="container pt-5 pb-5">
               <div className="row">
                <div className="col-md-3">
                    <div className="row ">
                    <div className="col-md-12 mb-5">
                    <h3>All Departments</h3>
                    <div className="line"></div>
                    <div className="row contact-box">
                    <div className="mt-4 pb-5 ">
                        <div className="col-md-12 pb-1">
                        <NavLink style={{"text-decoration":"none"}} className="departments " to="/Cardiology">
                            <li type='none' className="pb-2">| &nbsp; Cardiology<i className="fa-solid fa-chevron-right pl-5 ml-5"></i></li>
                        </NavLink>
                        </div>
                        <div className="divider">
                        <div className="col-md-12 pt-1 pb-5">
                        <NavLink style={{"text-decoration":"none"}} className="departments  " to="/Gynecology">
                            <li type='none' className="pt-2 pb-5">| &nbsp; Obstetrics & Gynecology  <i className="fa-solid fa-chevron-right pl-2 "></i></li>
                        </NavLink><br/><br/>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row contact-box">
                            <div className="col-md-3 pl-0 pt-1 ">
                                <i className="fa-solid fa-headset icon-headset" ></i>
                            </div>
                            <div className="col-md-9 pr-0  pt-1">
                                <h5>Emergency Cases</h5>
                                <p>0241 243 0530</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-9 pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="https://www.swasthyahospital.com/img/department/department21.jpg" alt="cardiology" className="w-100" />
                        </div>
                        <div className="col-md-12">
                            <h4 className="pt-5 font-weight-bold">Cardiology</h4>
                            <div className="line"></div>
                            <p className="pt-3">The hospital is well equipped with all the modern equipments to ensure treatment for the patients with any cardiac problem. The team of Cardiologists, Cath Lab and non-invasive lab technicians have wide experience in the management of all complex cardiac problems. The latest techniques in the field of Pacing and Coronary angioplasties are being routinely performed at the Hospital.<br/><br/>
                                We had a dream … It was our aim to provide the most sophisticated Cardiac Care at the most affordable cost to the patients in and around Ahmednagar. 10 yr down the lane, we have been successful in our goal and have grown into the most trusted Heart Hospital in this part of the country.<br/><br/>
                                Patients come to our hospital from all over the district state. `Safe and Ethical Heart treatment` is our motto and we strive to maintain the highest standards of cardiac care anywhere in the world. <br/><br/>
                                All this has been possible because of You. Your faith in us has been our primary motivation and our inspiration to work harder. Our focus has always your satisfaction and the results show that our stand has been vindicated. It has made us more humble and has strengthened our resolve to do better than what we have achieved. Not to rest on Laurels but to do dream more …
                            </p><br/><br/>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Echo / Doppler</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Tread Mill Test</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Holter Monitoring</h6>
                        </div>
                        <div className="col-md-12 mt-5 mb-5">
                            <h4 className="pb-2 font-weight-bold">INVASIVE CARDIOLOGY</h4>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Coronary Angiography</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Coronary Angioplasty</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Peripheral Angioplasty including Carotid Stenting</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Dilatation / Stenting of Coarctation of Aorta</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Pacemakers / Implants</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Valvuloplasty – Mitral / Aortic / Pulmonary</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Device Closure of PDA / ASD etc</h6>

                            
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </section>

        <Footer></Footer>
        </>
    )
}