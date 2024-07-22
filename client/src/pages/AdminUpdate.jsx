import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const AdminUpdate=()=>{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    });

    const params=useParams();
    console.log("params single user: ",params);
    const {authorizationToken}=useAuth();f

    const getSingleUserData=async()=>{
        try {
            const response=await fetch(`http://localhost:5000/abhinai/admin/users/${params.id}`,
                {
                    method:"GET",
                    headers:{
                        Authorization:authorizationToken,
                    }
                }
            )
            const data=await response.json();
            console.log(`users single data: ${data}`);
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{getSingleUserData()},[]);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setData({
            ...data,
            [name]:value,
        })
    };

     const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:5000/abhinai/admin/users/update/${params.id}`,{
                mehtod:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken,
                },
                body:JSON.stringify(data),
            })
            if(response.ok){
                toast.success("Update successfully");
            }else{
                toast.error("Not updated")
            }
        } catch (error) {
            console.log(error)
        }
     }

     return(
        <>
        <section className="bg-slate-300 h-svh">
          <main> 
            <div className="registration ">
              <div className="container grid grid-cols-2 gap-5 p-5 justify-items-center">
                <div className="registration-image ">
                  <img
                    src="/images/register1.jpg"
                    alt="You are trying to register"
                    className="mt-16 ml-24"
                  />
                </div>
                <div className="registration-form">
                  <h1 className="main-heading mt-5 text-4xl underline underline-offset-1 font-bold">Admin Update Page</h1>
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
                        autoComplete="off"
                        value={data.username}
                        onChange={handleInput}
                        required
                      /><br/>
                      <label htmlFor="email"  className="text-amber-700 font-semibold text-2xl">Email</label><br/>
                      <input
                        className="my-2"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={data.email}
                        onChange={handleInput}
                        required
                      /><br/>
                      <label htmlFor="phone"  className="text-amber-700 font-semibold text-2xl">Phone</label><br/>
                      <input
                        className="my-2"
                        type="phone"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={data.phone}
                        onChange={handleInput}
                        required
                      /><br/>
                    </div>
                    <button type="submit" className="submit">Update</button>
                  </form>
                </div>
              </div>
            </div> 
          </main>
      </section>
      </>
     )
}