import React, { useState } from "react";
import jwt_decode from 'jwt-decode';
import { useEffect } from "react";


//use to create the context 
export const Login_Create_Context=React.createContext();


export function Login_Provider(props) {

    const [Token,setToken]=useState("");
    const [AllUserDaata,setAllUserData]=useState(window.localStorage.AllUserDataSave?JSON.parse(window.localStorage.AllUserDataSave):"")

    useEffect(()=>{
        if(Token!==""){
            const DataUse=jwt_decode(Token);
            setAllUserData(DataUse);
            window.localStorage.AllUserDataSave=JSON.stringify(DataUse);
            window.location.href="/"
        }
    },[Token])


  return (
    <Login_Create_Context.Provider value={{setToken,AllUserDaata}}>
        {props.children}
    </Login_Create_Context.Provider>
  ) 
}
