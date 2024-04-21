import axios from 'axios';
import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const URL = 'http://localhost:5000/api/auth/forgot-password';

const ForgotPassword = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState([]);

    const handleSubmit =async (event)=>{
        event.preventDefault();
        try {
            const response = await fetch(URL,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'accept':'application/json, text/plain, */*',
                },
                body:JSON.stringify(email),
            });

            const res_data=await response.json();
            if(response.ok){             
                toast.success("Email sent successfully");
                navigate("/login");   
                setEmail({email:""});             
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
            
        } catch (error) {
            console.log("Error: ", error) ;
            
        }
    }




    return <>
        
       
        <section>
            <div className="container mb-5">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/free-photo/hands-medical-doctor_93675-130349.jpg" className="w-100 p-3 "  alt="" />
                    </div>
                    <div className="col-md-6 p-5">
                        <h2>    Forgot Password </h2><br/>
                        <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email :</label><br/>
                                    <input type="email" name="email" className="form-control text-start" placeholder="Enter Your email" id="email" required autoComplete="on"  onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                
                                <br/>
                                <div className="form-group text-left">
                                <button type="submit" className="btn btn-primary text-center  d-inline-block"> Send</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    </>
}


export default ForgotPassword;