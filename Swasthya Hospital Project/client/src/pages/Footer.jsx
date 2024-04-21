import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
    var year = new Date().getFullYear();
    
    return(<>
    <section className="bg-dark-black">
        <div className="container text-white">
            <div className="row pt-5 pb-5">
                <div className="col-md-3 mt-3">
                    <img src="https://www.swasthyahospital.com/img/footerlogo.png" className="w-100" alt="logo" />
                    <p className="mt-2 text-justify">Wide range of medical services like diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery.</p>
                    <ul type="none" className="pl-0">
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-location-dot mr-2"></i> Annabhau Sathe Chowk, Laltaki, Ahmednagar, Maharashtra 414001</li>
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-envelope mr-2"></i> swasthyahospitalcashless@gmail.com</li>
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-phone mr-2"></i> 0241-2344301, 2341311, 2430530</li>
                    </ul>
                </div>
                
                <div className="col-md-3 ml-4 mt-3 d-md-block d-none">
                    <h3 className="text-white">Departments</h3>
                    <div className="line"></div>
                    <ul className="list-unstyled ">
                        <li className="mt-3"><a href="/Home" className="text-white" >Cardiology</a></li>
                        <li className="mt-3"><a href="/About" className="text-white">Obstetrics & Gynaecology</a></li>
                        
                    </ul>
                </div>
                
                <div className="col-md-3 mt-3 d-md-block d-none">
                    <h3 className="text-white">Quick Links</h3>
                    <div className="line"></div>
                    <ul className="list-unstyled">
                        <li className="mt-3"><NavLink href="/" className="text-white">Home</NavLink></li>
                        <li className="mt-3"><NavLink to="/About" className="text-white">About</NavLink></li>
                        <li className="mt-3"><NavLink to="/Doctor" className="text-white">Doctors</NavLink></li>
                        <li className="mt-3"><NavLink to="/Cashless" className="text-white">Cashless</NavLink></li>
                        <li className="mt-3"><NavLink to="/Contact" className="text-white">Contact Us</NavLink></li>
                        <li className="mt-3"><NavLink to="/Contact" className="text-white">24/7 Support</NavLink></li>
                    </ul>
                </div>
                
                <div className="col-md-2 d-md-block d-none mt-3">
                    <h3 className="text-white">Facilities</h3>
                    <div className="line"></div>
                    <ul className="list-unstyled">
                        <li className="mt-3"><NavLink to="/Cashless" className="text-white">Cashless Facilities</NavLink></li>
                        <li className="mt-3"><NavLink to="/About" className="text-white">Cath Lab</NavLink></li>
                        <li className="mt-3"><NavLink to="/Services" className="text-white">Opreation Theater</NavLink></li>
                        <li className="mt-3"><NavLink to="/Doctors" className="text-white">ICU</NavLink></li>
                        <li className="mt-3"><NavLink to="/Contact" className="text-white">Cauallty</NavLink></li>
                        <li className="mt-3"><NavLink to="/Contact" className="text-white">2D Echo</NavLink></li>
                        <li className="mt-3"><NavLink to="/Contact" className="text-white">Stress Test</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <section className="bg-dark">
        <div className="container-fluid ">
            <div className="row pt-4 pb-4">
                <div className="col-md-5">
                        <ul>
                            <li className="d-inline-block ml-5 mt-3 text-white font-weight-bold">Follows us On :</li>
                            <a href="https://www.linkedin.com/in/rushikesh-pathade-187950200/" target="_blank"><li className="d-inline-block ml-3 mt-3 text-white"><i className="fa-brands fa-linkedin"></i></li></a>
                            <li className="d-inline-block ml-3 mt-3 text-white"><i className="fa fa-facebook"></i></li>
                            <li className="d-inline-block ml-3 mt-3 text-white"><i className="fa fa-twitter"></i> </li>
                            <li className="d-inline-block ml-3 mt-3 text-white"><i className="fa fa-youtube"></i> </li>
                        </ul>
                </div>
                <div className="col-md-7 mt-3 form-footer">
                    <span className="text-white font-weight-bold">Stay informed and healthy</span>
                    <input type="email" placeholder="Enter Your Email..." /> <button >SIGN UP!</button>
                </div>
            </div>
        </div>
    </section>

    <section className="copyright">
           <span>Copyright @{ year } &nbsp;<span className="owner"> Rushikesh Pathade. </span> &nbsp;All Rights Reserved.</span> 
    </section>
    </>)
}