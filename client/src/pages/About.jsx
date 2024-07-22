import React from "react";
import { useAuth } from "../store/auth";
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main className="bg-slate-300">
        <h2>
          Welcome {user ? `${user.username} ,to our wesite` : "to our website"}
        </h2>
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
                <h1 className="text-2xl text-center underline">About Us</h1>
                <p className="mt-10">
                  <span className="font-semibold">Introduction:</span>
                  <br />
                  "We are EduHub Academy, a leading provider of online computer
                  science courses designed to help you achieve your career
                  goals. Our mission is to make quality education accessible to
                  everyone, regardless of their location."
                </p>
                <br />
                <p>
                  <span className="font-semibold">Mission Statement:</span>
                  <br />
                  "Our mission is to empower individuals with the knowledge and
                  skills necessary to excel in the rapidly evolving field of
                  technology. We are committed to providing high-quality,
                  affordable education that prepares our students for success in
                  their careers."
                </p>
                <br />
                <p>
                  <span className="font-semibold">Call to Action:</span>
                  <br />
                  Ready to start your learning journey? Enroll Now or Contact Us
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
