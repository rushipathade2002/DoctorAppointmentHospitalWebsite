
import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./store/Auth";
import Nav from "./Nav";
import Footer from "./Footer";


const URL = 'http://localhost:5000/api/auth/login';

const Login = () =>{
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    const handleSubmit =async (event)=>{
        event.preventDefault();
        try {
            const response = await fetch(URL,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user),
            })

            console.log("login form", response);
            const res_data=await response.json();

            if(response.ok){
                
                // store the token in localstorage
                storeTokenInLS(res_data.token);
                toast.success("Login successful");
                // navigate to home page
                navigate("/");
                setUser({email:"",password:""});
                
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
            
        } catch (error) {
            console.log("Error: ", error) ;
            
        }
    }




    return <>
        <Nav></Nav>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0  doctor_page_banner">
                        <h1 className="ml-5 pl-5 ">Patient Login</h1>
                        <ul className="pl-5 ml-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3"> Patient</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container mb-5">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/free-photo/hands-medical-doctor_93675-130349.jpg" className="w-100 p-3 "  alt="" />
                    </div>
                    <div className="col-md-6 p-5">
                        <h2>    Login Form </h2><br/>
                        <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email :</label><br/>
                                    <input type="email" name="email" className="form-control text-start" placeholder="Enter Your email" id="email" required autoComplete="on" defaultValue={user.email} onChange={handleInput}/>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="Password">Password : </label><br/>
                                    <input type="password" name="password" className="form-control text-start" placeholder="Password" id="Password" required autoComplete="on" defaultValue={user.password} onChange={handleInput}/>
                                </div>
                                <br/>
                                <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary text-center  mt-0"> Login Patient</button>
                                </div>
                                <div className="form-group pt-3">
                                    <h6>Don't have an Account <NavLink to="/Register">Register here</NavLink></h6>
                                </div>
                                <div className="form-group pt-0 mt-0">
                                    <Link to="/forgotPassword">Forgot Password</Link>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </section>
        <Footer></Footer>
    </>
}


export default Login;