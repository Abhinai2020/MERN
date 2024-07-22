import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Service} from "./pages/Service";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Contact} from "./pages/Contact";
import {Logout} from "./pages/Logout";
import { Error } from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import React from "react";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import { AdminUpdate } from "./pages/AdminUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="contacts" element={<AdminContacts/>}/>
          {/* <Route path="users/update/" element={<AdminUpdate/>}/> */}
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
