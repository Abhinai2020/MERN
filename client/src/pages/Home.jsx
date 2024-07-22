import React from "react";
export const Home = () => {
  return (
    <>
      <main className="bg-slate-300">
        <section>
          <div>
            <div className="container grid grid-cols-2">
              <div>
                <img
                  src="/images/home.jpg"
                  alt="Something went wrong"
                  title="Image loading"
                  className="h-64 m-32 rounded-3xl"
                />
              </div>
              <div className="mt-24 ml-24">
                <h1 className="text-2xl text-center underline">
                  Welcome to our community
                </h1>
                <p className="mt-10">
                  Hello,We are providing computer science related course.
                </p>
                <br />
                <h1 className="text-xl font-bold">
                  The following courses we are providing:
                </h1>
                <ul>
                  <li>1. Python,C,C++,Java and many more languages</li>
                  <br />
                  <li>2. Full stack web development</li>
                  <br />
                  <li>3. Data structure and algorithm</li>
                  <br />
                  <li>4. Machine learning</li>
                  <br />
                  <li>5. Data analyst</li>
                  <br />
                  <li>6. Cyber security</li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="container grid grid-cols-2">
              <div className="mt-16 ml-24">
                <h1 className="text-xl text-center underline">
                  Description of the website
                </h1>
                <p className="mt-10 text-lg">
                  Explore a variety of courses available for enrollment. By
                  completing our courses, you'll be well-equipped to secure a
                  job at a reputable company. For more information, please
                  register and contact us. We are here to provide all the
                  details you need.
                </p>
              </div>
              <div>
                <img
                  src="/images/home1.jpg"
                  alt="Something went wrong"
                  title="Image loading"
                  className="h-64 m-32 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
