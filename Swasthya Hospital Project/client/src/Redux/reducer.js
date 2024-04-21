import { GET_ABOUT_DATA, GET_DEPT_DATA, GET_DOCTORS_DATA, GET_FACILITIES_DATA, GET_SLIDER_DATA, GET_CONTACTUS_DATA, GET_APPOINTMENT_DATA } from './actionType.js';

const initialState ={
    loading: false,
    error: false,
    doctors:[],
    slider:[],
    about:[],
    dept:[],
    facilities:[],
    contactUs:[],
    appointments:[],
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_APPOINTMENT_DATA :
            return{
                ...state,
                loading:false,
                appointments:payload
            }
        case GET_CONTACTUS_DATA:
            return{
                ...state, 
                loading:false,
                contactUs:payload
            }
        case GET_DOCTORS_DATA:
            return{
               ...state,
                loading:false,
                doctors:payload
            }
            case GET_ABOUT_DATA:
                return{
                    ...state, 
                    loading:false,
                    about:payload
                }
            case GET_DEPT_DATA:
                return{
                    ...state, 
                    loading:false,
                    dept:payload
                }
            case GET_FACILITIES_DATA:
                return{
                    ...state, 
                    loading:false,
                    facilities:payload
                }
            case GET_SLIDER_DATA:
                return{
                    ...state, 
                    loading:false,
                    slider:payload
                }
        
        default:
            return {
                ...state
            }
    }
}