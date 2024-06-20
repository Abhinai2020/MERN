import React,{createContext,useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=(props)=>{

    const [token,setToken]=useState(localStorage.getItem("token"))
    const [user,setUser]=useState("");
    const [services,setServices]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const authorizationToken=`Bearer ${token}`

    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn=!!token;

    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token")
    }

    const userAuthentication=async()=>{
        try {
            setIsLoading(true);
            const response=await fetch("http://localhost:5000/abhinai/user",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }else{
                setIsLoading(false)
            }
        } catch (error) {
            res.status(401).json({msg:"Unauthorized token"})
        }
    }

    const getServices=async()=>{
        try {
            const response=await fetch("http://localhost:5000/abhinai/service",{
                method:"GET"
            })
            if(response.ok){
                const data=await response.json();
                // console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`Services frontend error: ${error}`);
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[])

    return (
    <AuthContext.Provider value={{storeTokenInLS,LogoutUser,isLoggedIn,user,services,authorizationToken,isLoading}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside the Provider");
    }
    return authContextValue;
}