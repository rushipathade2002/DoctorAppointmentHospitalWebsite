import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./store/Auth";
import { toast } from "react-toastify";
import Nav from "./Nav";
import Footer from "./Footer";


const URL = 'http://localhost:5000/api/auth/register';

const Register = ()=>{

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth() 
    
    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        address:"",
        password:"",
    });



    // handling the input values
    const handleInput =(e)=>{
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    // handling form submission
    const handleSubmit =async (e)=>{
        e.preventDefault();
        // alert(user);
        // console.log(user);
        try {
            const response =await fetch(URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        });

             const res_data=await response.json();
            //  console.log(res_data);

            if(response.ok){
                // store the token in localstorage
                storeTokenInLS(res_data.token);
                toast.success("Registration successful");
                setUser({
                        username:"",
                        email:"",
                        phone:"",
                        address:"",
                        password:""
                    });

                // // navigate to the login page
                
                navigate("/");
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Register..",error)
        }
        


    }


    return <>

        <Nav></Nav>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0  doctor_page_banner">
                        <h1 className="ml-5 pl-5 ">Patient Register</h1>
                        <ul className="pl-5 ml-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3"> Patient</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Register</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container mb-5">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/id/1344935909/vector/man-at-the-reception-desk-in-the-interior-of-the-hospital-vector-flat-style-cartoon.jpg?s=612x612&w=0&k=20&c=dkrDBvMN9FSCRpty0qNw0yUE99TaLS52zt3aX-WK6cw=" className="w-100 p-3 pt-5"  alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Register Form </h2><br/>
                        <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Full Name : </label><br/>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    className="form-control text-start" placeholder="Enter Your Name..." 
                                    id="username" 
                                    required 
                                    autoComplete="on" 
                                    defaultValue={user.username} 
                                    onChange={handleInput} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email :</label><br/>
                                    <input type="email" name="email" className="form-control text-start" placeholder="Enter Your email" id="email" required autoComplete="on" defaultValue={user.email} onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone :</label><br/>
                                    <input type="number" name="phone" className="form-control text-start" placeholder="Enter Phone" id="Phone" required autoComplete="on" defaultValue={user.phone} onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Address">Address :</label><br/>
                                    <textarea cols="30" rows="3" name="address" className="form-control text-start" placeholder="Enter Address" id="Address" required autoComplete="on" defaultValue={user.address} onChange={handleInput}></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <label htmlFor="Password">Password : </label><br/>
                                    <input type="password" name="password" className="form-control text-start" placeholder="Password" id="Password" required autoComplete="on" defaultValue={user.password} onChange={handleInput}/>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary text-center mt-0"> Register Patient</button>
                                <div className="form-group pt-4">
                                    <h6>Already have an Account <NavLink to="/Login">Login here</NavLink></h6>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
           
        </section>
        <Footer></Footer>
    </>
}



export default Register;