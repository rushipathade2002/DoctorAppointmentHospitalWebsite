import React from "react";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import ContactUs from "./ContactUs.jsx";
import Doctor from "./Doctor.jsx";
import Index from "./Index.jsx";
import Cashless from "./Cashless.jsx";
import Facilities from "./Facilities.jsx";
import Gynecology from "./Gynecology.jsx";
import Cardiology from "./Cardiology.jsx";
import  Error  from "./ErrorPage.jsx";
import  Register  from "./Register.jsx";
import Login from "./Login.jsx";
import { Logout } from "./Logout.jsx";
import Appointment from "./Appointment.jsx";
import { AdminHome } from "./admin/AdminHome.jsx";
import { AppointmentList } from "./admin/AppointmentList.jsx";
import Patients from "./admin/Patients.jsx";
import  ContactsList  from "./admin/ContactsList.jsx";
import SliderList from "./admin/SliderList.jsx";
import DoctorList from "./admin/DoctorList.jsx";
import AddDoctor from "./admin/AddDoctor.jsx";
import AddSlider from "./admin/AddSlider.jsx";
import AddFacility from "./admin/AddFacility.jsx";
import { FacilitiesList } from "./admin/FacilitiesList.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

export default function Main(){
    return(
        <>
        <Router>
            
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/Doctor" element={<Doctor></Doctor>}></Route>
                <Route path="/Cashless" element={<Cashless></Cashless>}></Route>
                <Route path="/Contact" element={<ContactUs></ContactUs>}></Route>
                <Route path="/Facilities" element={<Facilities></Facilities>}></Route>
                <Route path="/Gynecology" element={<Gynecology></Gynecology>}></Route>
                <Route path="/Cardiology" element={<Cardiology></Cardiology>}></Route>
                <Route path="/Register" element={<Register></Register>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
                <Route path="/Logout" element={<Logout></Logout>}></Route>
                <Route path="/Appointment" element={<Appointment></Appointment>}></Route>
                <Route path="/admin" element={<AdminHome></AdminHome>}>
                    <Route path="Appointment" element={<AppointmentList></AppointmentList>}></Route>
                    <Route path="FacilitiesList" element={<FacilitiesList />}></Route>
                    <Route path="Patients" element={<Patients/>} />
                    <Route path="Contacts" element={<ContactsList></ContactsList>} />
                    <Route path="sliders" element={<SliderList></SliderList>}></Route>
                    <Route path="Doctors" element={<DoctorList></DoctorList>}></Route>
                    <Route path="AddDoctor" element={<AddDoctor></AddDoctor>}></Route>
                    <Route path="addSlider" element={<AddSlider></AddSlider>}> </Route> 
                    <Route path="AddFacility" element={<AddFacility></AddFacility>}> </Route> 
                    {/* <Route path="users/edit/:id" element={} /> */}
                </Route>
                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
           
        </Router>
        </>
    )
}