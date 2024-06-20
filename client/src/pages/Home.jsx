import React from "react";
export const Home = () => {
    return (
    <>
       <main className="bg-stone-500">
        <section>
            <div>
                <div className="container grid grid-cols-2">
                    <div>
                        <img src="/images/home.jpg" alt="Something went wrong" title="Image loading" className=""/>
                    </div>
                    <div className="mt-24 ml-24">
                        <h1 className="text-2xl text-center underline">Welcome to homepage</h1>
                        <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cupiditate recusandae sit praesentium adipisci numquam nam cumque dicta eveniet quae labore veniam debitis incidunt deserunt enim reprehenderit, velit ut optio vero culpa consequuntur! Eius, corrupti qui omnis labore eos ullam sed provident quasi amet, tempore nostrum molestias iusto voluptates. Beatae.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <div className="container grid grid-cols-2">
                    <div className="mt-16 ml-24">
                        <h1 className="text-xl text-center underline">Description of the website</h1>
                        <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cupiditate recusandae sit praesentium adipisci numquam nam cumque dicta eveniet quae labore veniam debitis incidunt deserunt enim reprehenderit, velit ut optio vero culpa consequuntur! Eius, corrupti qui omnis labore eos ullam sed provident quasi amet, tempore nostrum molestias iusto voluptates. Beatae.</p>
                    </div>
                    <div>
                        <img src="/images/home1.jpg" alt="Something went wrong" title="Image loading" className="imgsize mt-32"/>
                    </div>
                </div>
            </div>
        </section>
       </main>
    </>
)
};