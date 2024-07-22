import React, { useState } from "react";
import "../index.css"
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth"
import { toast } from 'react-toastify';

export const Register = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
  
    const navigate=useNavigate();

    const {storeTokenInLS}=useAuth();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`http://localhost:5000/abhinai/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      })
      const res_data=await response.json();
      console.log("res from server",res_data);
      if(response.ok){
        toast.success("Registration successful")
        storeTokenInLS(res_data.token)
        // localStorage.setItem("token",res_data.token);
        setUser({ username:"",
        email:"",
        phone:"",
        password:""})
        navigate("/login")
      }
      else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
      }
     }
     catch (error) {
      console.log("register",error)
    }
   };
  return (
    <>
      <section className="bg-slate-300">
        <main> 
          <div className="registration ">
            <div className="container grid grid-cols-2 gap-5 p-5 justify-items-center">
              <div className="registration-image ">
                <img
                  src="/images/register1.jpg"
                  alt="You are trying to register"
                  className="h-64 m-32 rounded-3xl"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mt-5 text-4xl underline underline-offset-1 font-bold">Registration-form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="text-amber-700 font-semibold text-2xl ">Username</label><br/>
                    <input
                      className="my-2"
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    /><br/>
                    <label htmlFor="email"  className="text-amber-700 font-semibold text-2xl">Email</label><br/>
                    <input
                      className="my-2"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    /><br/>
                    <label htmlFor="phone"  className="text-amber-700 font-semibold text-2xl">Phone</label><br/>
                    <input
                      className="my-2"
                      type="number"
                      name="phone"
                      placeholder="Enter your phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    /><br/>
                    <label htmlFor="password" className="text-amber-700 font-semibold text-2xl">Password</label><br/>
                    <input
                      className="my-2"
                      type="password"
                      name="password"
                      placeholder=" Enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit" className="submit">Register</button>
                </form>
              </div>
            </div>
          </div> 
        </main>
    </section>
    </>
  );
};
