import React, { useState } from "react";
import { useAuth } from "../store/auth";
import "../index.css"

const contactFormData= {
  username:"",
  email:"",
  message:""
}
export const Contact = () => {
    const [contact,setContact]=useState(contactFormData)

    const [userData,setUserData]=useState(true);
    const {user}=useAuth();
    if(userData && user){
      setContact({
        username:user.username,
        email:user.email,
        message:""
      })
      setUserData(false);
    }

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setContact({
            ...contact,
            [name]:value
        })
    }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`http://localhost:5000/abhinai/contact`,
        {
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(contact)
        }
      )
      if(response.ok){
        setContact(contactFormData)
        const data=await response.json()
        console.log(data)
        alert("Message successfully sent")
      }
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
      <section className="bg-orange-300 h-svh">
        <main> 
          <div className="contact">
            <div className="container grid grid-cols-2 gap-5 p-5 justify-items-center">
              <div className="contact-image ">
                <img
                  src="/images/contact.jpg"
                  alt="Something went wrong"
                  className="mt-16 ml-32"
                />
              </div>
              <div className="contact-form">
                <h1 className="main-heading mt-5 text-4xl underline underline-offset-1 font-bold">Contact Us</h1>
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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    /><br/>
                    <label htmlFor="message"  className="text-amber-700 font-semibold text-2xl">Message</label><br/>
                    <textarea 
                    cols={25}
                    rows={8}
                      className=" my-2"
                      type="text"
                      name="message"
                      placeholder="Write what you want to know"
                      id="message"
                      required
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}>
                      </textarea><br/>
                  </div>
                  <button type="submit" className="submit">Submit</button>
                </form>
              </div>
            </div>
          </div> 
        </main>
    </section>
    <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52270.31484420333!2d86.01413248902966!3d25.7515264668492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edf19cf276d7b7%3A0xdeb0b5414656e5a5!2sRosera%2C%20Bihar!5e0!3m2!1sen!2sin!4v1715461125814!5m2!1sen!2sin" width={1520} height={300}  ></iframe>
    </section>
    </>
  );
};
