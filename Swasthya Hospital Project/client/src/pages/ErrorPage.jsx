import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error(){
    return(
        <>
        
            <section id="error-page" className="pt-5 pb-5">
                <div className=" content pb-5">
                    <h2 className="header">404</h2>
                    <h4 >Sorry! Page Not found</h4>
                    <p>Oops! It seems like the page you`re trying to access doesn`t exist.
                        If you believe there`s an issue, feel free to report it, and we`ll 
                        look into it.
                    </p>
                    <div className="btns">
                        <NavLink to="/" className="btn1">return home</NavLink>
                        <NavLink to="/contact" className="btn1">report problem</NavLink>
                    </div>
                </div>
            </section>
           
        </>
    )
}