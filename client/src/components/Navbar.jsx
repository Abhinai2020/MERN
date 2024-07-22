import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css"
 const Navbar = () => {
  const {isLoggedIn}=useAuth();
  return (
    <>
    <header>
          <nav className="Navbar h-12 pt-2">
            <div className="Navdiv">
            <div className="logo"><NavLink to="#" className="text-3xl font-bold">EduHub Academy</NavLink></div>
            <ul>
              <li>
                <NavLink  exact="true" to="/" className="navlink"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/About" className="navlink"  exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>About</NavLink>
              </li>
              <li>
                <NavLink to="/Service" className="navlink" exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Service</NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="navlink" exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Contact</NavLink>
              </li>
              {isLoggedIn?
               (<li>
               <NavLink to="/Logout" className="navlink" exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Logout</NavLink>
             </li>)
             :
             (<>
              <li>
                <NavLink to="/Login" className="navlink" exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Login</NavLink>
              </li>
              <li>
                <NavLink to="/Register" className="navlink" exact="true" style={({ isActive }) => {return {color: isActive ? "black" : "white",};}}>Register</NavLink>
              </li>
             </>)
              }
            </ul>
            </div>
          </nav>
          </header>
    </>
  );
};
export default Navbar;
