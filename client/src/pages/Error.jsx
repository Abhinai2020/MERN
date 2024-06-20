import { NavLink } from "react-router-dom";
import React from "react";
 export const Error=()=>{
    return(
        <>
        <section id="error-page" className="h-screen">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                    Oops! It seems like the page you're trying to access does't exist.<br/>
                    If you believe there's an issue, feel free to report it,and we'll
                    look into it.
                </p><br/>
                <div className="btns">
                <NavLink  to="/" className="submit"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Return Home</NavLink>
                <NavLink  to="/Contact" className="submit ml-2"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Report issue</NavLink>
                </div>
            </div>
        </section>
        </>
    )
}