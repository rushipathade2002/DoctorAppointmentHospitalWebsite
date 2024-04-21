import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSliderData } from "../../Redux/action";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";




export const FacilitiesList = ()=>{

    const URL = "http://localhost:5000/uploads/";
    const [facility, setFacility ] = useState([])
    // const dispatch = useDispatch();
    // const { slider } = useSelector(store=>store.product)
    const { authorizationToken } = useAuth();
         
    useEffect(()=>{
        // dispatch(getSliderData());
        getAllFacilities();
    },[]);

    const getAllFacilities = async()=>{
         const response = await fetch("http://localhost:5000/api/admin/facilities",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization : authorizationToken
                },
            });
            const data = await response.json();
            if(response.ok){
                setFacility(data);
            }else{
                toast.error("Data not fetching please refresh again");
            }
        }

    const deleteFacility = async (id)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/deleteFacility/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: authorizationToken,
            }
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message); // Throw an error if response is not successful
            }
            
            if( response.ok){
            toast.success("Deleted Facility Successfully");
            getAllFacilities();
            // navigate("/admin/Doctors")
            // window.location.reload();
            }else{
                toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
            <div className="wide_line"></div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Facility List  </h2>
                            <div className="line"></div>    
                        </div>
                        <div className="col-md-11 mt-3">
                            <div className="table">
                                <table className="table-stripped table-responsive w-100">
                                    <thead>
                                        <th> SN </th>
                                        <th> Title </th>
                                        <th> Description </th>
                                        <th> Link </th>
                                        <th> Img </th>
                                        <th> Edit </th>
                                        <th>Delete</th>
                                    </thead>
                                    { facility && facility.length === 0 && (
                                        <tr>
                                            <td colSpan="10">No facility Found</td>
                                        </tr>
                                    )}
                                    { facility && facility.map((elemt,index)=>{
                                        let {_id, title, description, service_link, service_image } = elemt;
                                        return(
                                            <>
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{title}</td>
                                                    <td>{description}</td>
                                                    <td><img src={service_link} width={200} alt="" /></td>
                                                    <td><img src={`${URL}${service_image}`} width={250} height={200}  alt={title} /></td>
                                                    <td style={{"display":"grid","placeItems":"center"}}><button className="btn btn-success"><FaEdit /></button></td>
                                                    <td><button className="btn btn-danger" onClick={()=>{
                                                        if(window.confirm("Are you sure you want to delete facility")){
                                                            deleteFacility(_id);
                                                        }
                                                    }}><MdDelete /></button></td>
                                                </tr>
                                            </>
                                        )   
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


