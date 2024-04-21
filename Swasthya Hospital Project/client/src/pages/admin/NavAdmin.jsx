import React, { useState } from "react";
import "./AdminStyle.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHospitalUser, FaSliders, FaUserDoctor } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { TiContacts } from "react-icons/ti";
import { FaPhotoVideo } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiDashboard3Line } from "react-icons/ri";



// import $ from 'jquery'; 

export const NavAdmin = () => {

    const [isVisible, setVisible] = useState(true);

     const handleClick = () => {
            setVisible(!isVisible);
        };

    return (
        <>
        <div className="hide" style={{ display: isVisible ? 'block' : 'none' }}>
        <ul className="menu"  >

        <h1 style={{"marginLeft" : 10, "marginTop" : 30}} ><img src="https://cdn-icons-png.flaticon.com/512/4017/4017991.png" alt="" width="50" 
        style={{"borderRadius": 10, marginLeft: 15, "marginTop":10}} /> </h1>
        <b className="b" style={{"marginBottom":"0px","paddingTop":"15px","color":"white","fontSize":"25px"}}>ADMIN</b>
        <hr/>
        <div className="text">
            {/* <li className="item"><Link to="/admin"><RiDashboard3Line />&nbsp; &nbsp;Dashboard</Link></li> */}
            <li className="item"><NavLink to={"/admin/Appointment"} ><ImCalendar />&nbsp; &nbsp; Appointment</NavLink></li>
            <li className="item"><NavLink to={"/admin/AddDoctor"} ><FaUserDoctor />&nbsp; &nbsp;Add Doctor</NavLink></li>
            <li className="item"><NavLink to={"/admin/Doctors"} ><FaUserDoctor />&nbsp; &nbsp; Doctors List</NavLink></li>
            <li className="item"><NavLink to={"/admin/Patients"} ><FaHospitalUser />&nbsp; &nbsp; Patients</NavLink></li>
            <li className="item"><NavLink to={"/admin/Contacts"} ><TiContacts /> &nbsp; &nbsp;Contact US</NavLink></li>
            <li className="item"><NavLink to={"/admin/AddFacility"} ><i className="fas fa-chart-line"></i>Add Facility</NavLink></li>
            <li className="item"><NavLink to={"/admin/FacilitiesList"} ><FaPhotoVideo /> &nbsp; &nbsp; Facilities </NavLink></li>
            <li className="item"><NavLink to={"/admin/addSlider"} ><FaSliders />&nbsp; &nbsp; Add Slider</NavLink></li>
            <li className="item"><NavLink to={"/admin/sliders"} ><FaSliders />&nbsp; &nbsp; Sliders</NavLink></li>
            <li className="item"><NavLink to={"/"} ><FiLogOut />&nbsp; &nbsp; Home</NavLink></li>
        </div>
    </ul>

    </div>
            <button style={{"marginTop":"20px", "float":"right"}} className="btn btn-group-toggle" onClick={handleClick}><GiHamburgerMenu /></button>

    <br/>
        
        </>
    );
}
