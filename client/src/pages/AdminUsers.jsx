import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import {Link} from "react-router-dom";
import './decoration.css'
import { toast } from 'react-toastify';

function AdminUsers() {
    const [users,setUsers]=useState([]);
    const {authorizationToken}=useAuth();
    const getAllUsersData=async()=>{
        try {
            const response=await fetch("http://localhost:5000/abhinai/admin/users",{
                method:'GET',
                headers:{
                    Authorization:authorizationToken,
                }
            })
            const data=await response.json();
            // console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser=async(id)=>{
        try {
            const response=await fetch(`http://localhost:5000/abhinai/admin/users/delete/${id}`,{
                method:"DELETE",
            headers:{
                Authorization:authorizationToken,
            }
            })
            const data=await response.json();
            console.log(`user after deletion ${data}`)

            if(response.ok){
                getAllUsersData();
                toast.success("User deleted successfully")
            }else{
                toast.error("Something went wrong")
            }
        } catch (error) {
            next(error)
        }
    }
    useEffect(()=>{
        getAllUsersData();
    },[])
  return (
    <>
    <section className='bg-indigo-500'>
        <div>
        <h1 className='text-center text-2xl font-bold underline underline-offset-1'>Admin Users Data</h1>
        </div>
        <div >
            <table className='table-content'>
                <thead >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    { 
                    users.map((curUser,index)=>{
                       return  <tr key={index}>
                         <td>{curUser.username}</td>
                         <td>{curUser.email}</td>
                         <td>{curUser.phone}</td>
                         <td><Link to={`/admin/users/${curUser._id}`}>Edit</Link></td>
                         <td><button onClick={()=>deleteUser(curUser._id)} className='delete'>Delete</button></td>
                     </tr>
                    })}
                   
                </tbody>
            </table>
        </div>
    </section>
    </>
  )
}

export default AdminUsers