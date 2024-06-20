import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import {FaUser,FaHome,FaRegListAlt} from "react-icons/fa"
import {FaMessage} from "react-icons/fa6"
import "./Navbar1.css"
import { useAuth } from '../../store/auth';

function AdminLayout() {
  const {user,isLoading}=useAuth();
  if(isLoading){
    return <h1>Loading ...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <>
    <header>
        <nav className='Navbar1'>
        <div className="Navdiv1">
          <ul>
            <li>
              <NavLink exact="true"  className="navlink1"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}} to="/admin/users"> <FaUser className='display-flex'/>Users </NavLink>
            </li>
            <li>
            <NavLink exact="true"  className="navlink1"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}} to="/admin/contacts"><FaMessage/>Contacts</NavLink>
            </li>
            <li>
            <NavLink exact="true" className="navlink1"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}} to="/Service"><FaRegListAlt/>Service</NavLink>
            </li>
            <li>
            <NavLink exact="true" className="navlink1"  style={({ isActive }) => {return {color: isActive ? "black" : "white",};}} to="/"><FaHome/>Home</NavLink>
            </li>
          </ul>
          </div>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default AdminLayout;