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
                        <h1 className="ml-5 pl-5 ">Obstetrics And Gynecology</h1>
                        <ul className="pl-5 ml-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3"> Departments</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Obstetrics And Gynecology</li>
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
                    <div className="line "></div>
                    <div className="row contact-box mt-4 ">
                    <div className="mt-3 pb-4  ">
                        <div className="col-md-12 pb-1">
                        <NavLink style={{"text-decoration":"none"}} className="departments " to="/Cardiology">
                            <li type='none' className="pb-2">| &nbsp; Cardiology  &nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-chevron-right pl-5 ml-5"></i></li>
                        </NavLink>
                        </div>
                        <div className="divider"></div>
                        <div className="col-md-12 pt-1 ">
                        <NavLink style={{"text-decoration":"none"}} className="departments  " to="/Gynecology">
                            <li type='none' className="pt-2 pb-3">| &nbsp; Obstetrics & Gynecology  <i className="fa-solid fa-chevron-right pl-2 "></i></li>
                        </NavLink>
                        </div>
                        <div className="divider"></div>
                        <div className="col-md-12 pt-1">
                        <NavLink style={{"text-decoration":"none"}} className="departments  " to="/Medicine">
                            <li type='none' className="pt-2">| &nbsp; Medicine  &nbsp;&nbsp;&nbsp; &nbsp;<i className="fa-solid fa-chevron-right pl-5 ml-5 "></i></li>
                        </NavLink>
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
                            <img src="https://www.swasthyahospital.com/img/department/department22.jpg" alt="gynecology" className="w-100" />
                        </div>
                        <div className="col-md-12">
                            <h3 className="pt-5 font-weight-bold">Obstetrics & Gynaecology</h3>
                            <div className="line"></div>
                            <p className="pt-3">
                                The Obstetrics & Gynaecology department of offers the most advanced comprehensive care for all Gynaecological health conditions for patients of all ages. The department is known for its highly skilled maternity service with antenatal, postnatal and family planning clinics added. The labor ward is well equipped with delivery beds, Cardiac & Medicine, ultrasound machines, etc. The facilities for an epidural block for painless labor are also included At the request of the patient, the hospital also permits the patient's close family members to be near, at the time of delivery as Birth Companion. <br/><br/>
                                The infertility unit provides systematic analysis, evaluation and individualized treatment to beat infertility. Ultrasound Scanning, Doppler, IUI treatment, and Laparoscopic & Hysteroscopic surgeries are major specialties of this department.    
                            </p>
                        </div>
                        <div className="col-md-12 mt-4 mb-5 ">
                            <h3 className="pb-1 font-weight-bold">Key Highlights</h3>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>UltraSound Scanning</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Colour Doppler scanning</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Total Infertility Evaluation for both males and females</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Controlled ovarian stimulation & IUI</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Facilities for Pap Smear liquid-based Cytology, Colposcope, and Mammogram. We offer to screen for Genital Tract Cancer and Breast Cancer</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>All sorts of Gynaecological surgeries including conventional, open and vaginal surgeries like TAH, TVT-O, NDVH and Reconstructive surgeries for Pelvic Organ Prolapse</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Endoscopic surgeries - Laparoscopic and Hysteroscopic</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Diagnostic procedures</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Tubal sterilizations</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>PCOD puncture</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Salpingectomy for ectopic pregnancy.</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Endometriosis surgery</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Myomectomy - Open and Laparoscopic</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Hysterectomy- Open / Vaginal</h6>
                            <h6><i className="fa-solid fa-circle-chevron-right text-primary text-shadow pr-4 pt-3"></i>Total Laparoscopic hysterectomy</h6>
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