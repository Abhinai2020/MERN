import React from "react";
import {useAuth} from "../store/auth";
export const About=()=>{
    const {user}=useAuth();
    return(
        <>
        <main className="bg-red-400">
            <h2>Welcome {
                user?`${user.username} ,to our wesite`:"to our website"
                }</h2>
         <section>
            <div>
                <div className="container grid grid-cols-2">
                    <div>
                        <img src="/images/home.jpg" alt="Something went wrong" title="Image loading" className=""/>
                    </div>
                    <div className="mt-24 ml-24">
                        <h1 className="text-2xl text-center underline">About Us</h1>
                        <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cupiditate recusandae sit praesentium adipisci numquam nam cumque dicta eveniet quae labore veniam debitis incidunt deserunt enim reprehenderit, velit ut optio vero culpa consequuntur! Eius, corrupti qui omnis labore eos ullam sed provident quasi amet, tempore nostrum molestias iusto voluptates. Beatae.</p>
                    </div>
                </div>
            </div>
        </section>
        </main>
        </>
    )
}