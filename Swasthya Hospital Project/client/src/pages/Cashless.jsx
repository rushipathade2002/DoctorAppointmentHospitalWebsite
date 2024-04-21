import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";


export default function Cashless(){
    return(
        <>
        <Nav></Nav>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0 doctor_page_banner">
                        <h1 className="ml-5 pl-5">Cashless Facility</h1>
                        <ul className="ml-5 pl-5">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right text-primary"></i></li>
                            <li className="d-inline-block ml-3">Cashless Facility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row ">
                    <div className="col-12 mt-5 table-responsive policy-table">
                        <h2>Cashless Facility Available</h2>
                        <div className="sm-line"></div>
                        <table className="table mt-3 table-light table-striped ">
                            <tr>
                                <td>1</td>
                                <td>Star Health & Allied Insurance</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Bajaj Allianz General Insurance</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ICICI Lombard General Insurance</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Max Bupa General Insurance</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Reliance General Insurance</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Apollo Munich Health Insurance</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Cholamandalam Ms General Insurance</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Universal Sompo General Insurance Co. Ltd.</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Iffco Tokio General Insurance Co.</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Aditya Birla Health Insurance Co.</td>
                            </tr>
                            
                        </table>

                    </div>


                    <div className="col-12 mt-5 table-responsive policy-table">
                        <h2 >TPA Services</h2>
                        <div className="sm-line"></div>
                        <table className="table mt-3 table-light table-striped ">
                            <tr>
                                <td>1</td>
                                <td>MD India Health Services(TPA) Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Paramount Health Services (TPA) Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Medicare TPA Service Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Medi Assist India TPA Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>United Healthcare Parekh TPA Service</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Vidai Health TPA Services (formerly Known as TTK)</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Medsave Health Insurance TPA Ltd.</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Raksha TPA Services Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Health India TPA Services</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Health Insurance TPA</td>
                            </tr>
                            
                        </table>

                    </div>

                    
                    <div className="col-12 mt-5 table-responsive policy-table">
                        <h2>Government Health Scheme Available</h2>
                        <div className="sm-line"></div>
                        <table className="table mt-3 table-light table-striped ">
                            <tr>
                                <td>1</td>
                                <td>(MJPJAY) Mahatma Jyotiba Phule Jan Arogya Yojana</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>(PMJAY) Pradhan Mantri Jan Arogya Yojana</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>(MPKAY) Maharashtra Police Kutumb Arogya Yojana</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>(MKSSKAY) Maharashtra Karagruh Sudhar Sevabai Kutumb Arogya Yojana</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>(ECHS) Ex-service Men Contributory Health Scheme</td>
                            </tr>                            
                        </table>

                    </div>

                     <div className="col-12 mt-5 table-responsive policy-table">
                        <h2>Pre Policy Health Checkup</h2>
                        <div className="sm-line"></div>
                        <table className="table mt-3 table-light table-striped ">
                            <tr>
                                <td>1</td>
                                <td>HDFC Life Insurance Co.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ICICI General Insurance Company</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Vipul Mecare Pvt. Ltd.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Call Health</td>
                            </tr>                         
                        </table>

                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
        </>
    )
}