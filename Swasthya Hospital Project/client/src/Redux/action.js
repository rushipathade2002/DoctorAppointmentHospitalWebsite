import axios from "axios";
import { GET_DOCTORS_DATA, GET_FACILITIES_DATA, GET_SLIDER_DATA, SET_ERROR, SET_LOADING, GET_CONTACTUS_DATA  } from "./actionType.js";


export const getDoctorsData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try {
        const response = await axios.get('http://localhost:5000/api/admin/doctors',{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const doctors = response.data;
        dispatch({
            type:GET_DOCTORS_DATA,
            payload:doctors
        });
        
    } catch (error){
        dispatch({
            type:SET_ERROR, 
        })
    }
}


export const getFacilitiesData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try {
        const response = await axios.get('https://a2zithub.com/swasthyahospital/hospital/services',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
                'Access-Control-Allow-Credentials': true,
            }
        })
        dispatch({
            type:GET_FACILITIES_DATA,
            payload:response.data
        });
    } catch (error) {
        dispatch({
            type:SET_ERROR, 
        })
    }
}


export const getSliderData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try {
        const response = await axios.get('http://localhost:5000/api/data/sliders')
        const data = await response.data;
        // console.log(data)
        dispatch({
            type:GET_SLIDER_DATA,
            payload:data
        });
    } catch (error){
        dispatch({
            type:SET_ERROR, 
        })
    }
}

export const getContactUsData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try {
        const response = await axios.get("http://localhost:5000/api/admin/contacts");
        console.log(response.data)
        dispatch({
            type:GET_CONTACTUS_DATA,
            payload:response.data
        });
    } catch (error){
        dispatch({
            type:SET_ERROR, 
        })
    }
}


