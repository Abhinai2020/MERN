import React from "react";
import { useAuth } from "../store/auth";
export const Service=()=>{
    const {services}=useAuth();
    return(
        <>
       <section className="services bg-slate-300">
        <div className="container">
            <h1 className="main-heading text-2xl font-bold underline">Services</h1>
        </div>
        <div className="container grid grid-cols-3">

            {
                services.map((curElem,index)=>{
                    const {price,description,provider,service}=curElem;
                    return(
                    <div className="card" key={index}>
                    <div className="card-img">
                        <img src="/images/services.jpg" alt="Img not found" className="ml-2 rounded-3xl"/>
                    </div>
                    <div className="card-details ml-5">
                    <div className="grid grid-cols-2">
                        <p>{provider}</p>
                        <p>Couse price:{price}</p>
                    </div>
                    <p>{service}</p>
                    <p>{description}</p>
                    </div>
                </div>)
                })
            }

           
        </div>
       </section>
       </>
    )
}