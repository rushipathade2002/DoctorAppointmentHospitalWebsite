import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [slider, setSlider] = useState([]);
    // const [patients, setPatients] = useState([]);
    // const [appointments, setAppointments] = useState([]);
    // const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const authorizationToken = `Bearer ${token}`;
    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    }

   var isLoggedIn = !!token;

   if(user.isAdmin){
    var admin = true;
   }else{
    admin = false;
   }
    // Tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    // JWT Authentication to get the currently logged in user data

    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken
                },
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false)
            }else{
                setIsLoading(false);
                console.log("Error fetching user Data");
            }

        } catch (error) {
            console.error("Error fetching user data");
        }
    }

    // Fetching the patient Data
    // const getAllPatients = async ()=>{
    //     try {
    //         setIsLoading(true);
    //         const response = await fetch("http://localhost:5000/api/admin/users", {
    //             method:"GET",
    //             headers:{
    //                 "Content-Type":"application/json",
    //                 Authorization : authorizationToken
    //             },

    //         });
            
    //         if(response.ok){
    //             setIsLoading(false);
    //             const data = await response.json();
    //             setPatients(data)
    //         }else{
    //             setIsLoading(false);
    //             console.log("Error fetching user Data");
    //         }
    //     } catch (error) {
    //         console.error("error fetching patient data");
    //     }
    // }


    // const getAppointmentList = async ()=>{
    //     try {
    //         setIsLoading(true);
    //         const response = await fetch("http://localhost:5000/api/admin/appointments", {
    //             method:"GET",
    //             headers:{
    //                 "Content-Type":"application/json",
    //                 Authorization : authorizationToken
    //             },

    //         });
            
    //         if(response.ok){
    //             setIsLoading(false);
    //             const data = await response.json();
    //             setAppointments(data)
    //         }else{
    //             setIsLoading(false);
    //             console.log("Error fetching user Data");
    //         }
    //     } catch (error) {
    //         console.error("error fetching patient data");
    //     }
    // }

    // get slider data
    const getSliderData =async ()=>{
        const response =await fetch("http://localhost:5000/api/data/sliders",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        });
        if(response.ok){
            const data = await response.json();
            setSlider(data)
        }
    }

    // const getDoctorsData =async ()=>{
    //     const response =await fetch("http://localhost:5000/api/admin/doctors",{
    //         method:"GET",
    //         headers:{
    //             "Content-Type":"application/json",
    //             Authorization:authorizationToken,
    //         },
    //     });
    //     if(response.ok){
    //         const data = await response.json();
    //         setDoctors(data)
    //     }
    // }




    useEffect(()=>{
        userAuthentication();
        // getSliderData();
        // getAllPatients();
        // getAppointmentList();
        // getDoctorsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <AuthContext.Provider value={{
        isLoggedIn, 
        storeTokenInLS, 
        LogoutUser, 
        user, 
        authorizationToken, 
        slider,
        isLoading,
        // patients,
        // appointments,
        // doctors,
        admin
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{

    const authContextValue = useContext(AuthContext);

    if(!authContextValue){
        throw new Error("useAuth must be used outside of the Provider");
    }

    return authContextValue;
}