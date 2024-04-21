import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { NavAdmin } from "./NavAdmin";
import { useAuth } from "../store/Auth";


export const AdminHome = ()=>{

    const { user,isLoading } = useAuth();
    
     if(isLoading){
        return <>
                    <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
                        <img src="../images/loading.gif" alt="loading..." className="loading" />
                        <h1 style={{"color":"red","fontSize":"50px"}}>Loading ....</h1>
                    </div>
                </>
        }

     if(!user.isAdmin){
        return <Navigate to="/" />
    }

    return(
        <div className="admin">
            <NavAdmin></NavAdmin>
            <h1 style={{"textTransform": "uppercase"}} className="h">Welcome admin 👋</h1>
            
            <br></br>
            <Outlet/>
        </div>
    )
}


