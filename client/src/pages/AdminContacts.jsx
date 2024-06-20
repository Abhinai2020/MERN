import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import './decoration.css'
import { toast } from 'react-toastify';


function AdminContacts() {
    const [contacts,setContacts]=useState([]);
    const {authorizationToken}=useAuth();
    const getAllContactsData=async()=>{
        try {
            const response=await fetch("http://localhost:5000/abhinai/admin/contacts",{
                method:'GET',
                headers:{
                    Authorization:authorizationToken,
                }
            })
            const data=await response.json();
            // console.log(`users ${data}`);
            setContacts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteContact=async(id)=>{
        try {
          const url=`http://localhost:5000/abhinai/admin/contacts/delete/${id}`;
            const response=await fetch(url,{
                method:"DELETE",
            headers:{
                Authorization:authorizationToken,
            }
            })
            const data=await response.json();
            console.log(`contacts after deletion ${data}`)

            if(response.ok){
                getAllContactsData();
                toast.success("Contact deleted successfully")
            }else{
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllContactsData();
    },[])
  return (
    <>
    <section className='bg-indigo-500'>
        <div>
        <h1 className='text-center text-2xl font-bold underline underline-offset-1'>Admin Contacts Data</h1>
        </div>
        <div >
            <table className='table-content'>
                <thead >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    { 
                    contacts.map((curContact,index)=>{
                      const {username,email,message,_id}=curContact
                       return  <tr key={index}>
                         <td>{username}</td>
                         <td>{email}</td>
                         <td>{message}</td>
                         <td><button onClick={()=>deleteContact(_id)} className='delete'>Delete</button></td>
                     </tr>
                    })}
                   
                </tbody>
            </table>
        </div>
    </section>
    </>
  )
}

export default AdminContacts