import React, { useState } from "react";
import "../index.css"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth"
import { toast } from 'react-toastify';

export const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate();

    const {storeTokenInLS}=useAuth();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value
        })
    }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`http://localhost:5000/abhinai/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
      })
      console.log(response)
      const res_data=await response.json();
      if(response.ok){
        storeTokenInLS(res_data.token)
        // localStorage.setItem("token",res_data.token)
        toast.success("Login successfully")
        setUser({
          email:"",
          password:""
        })
        navigate("/")
      }else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message||"Please enter correct password")
      }
      
    } catch (error) {
      console.log("login",error)
    }
   
   }
  return (
    <>
      <section className="bg-sky-400 h-svh">
        <main> 
          <div className="login ">
            <div className="container grid grid-cols-2 gap-5 p-5 justify-items-center">
              <div className="login-image ">
                <img
                  src="/images/login.jpg"
                  alt="You are trying to login"
                  className="mt-16 ml-16"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mt-5 text-4xl underline underline-offset-1 font-bold">Login</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
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
                  <button type="submit" className="submit">Login</button>
                </form>
              </div>
            </div>
          </div> 
        </main>
    </section>
    </>
  );
};
