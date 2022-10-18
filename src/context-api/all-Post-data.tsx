import React, { useState } from "react";



//use to create the context 
export const AllPost_Context=React.createContext<any|null>(null);


export function All_Postes_Provider(props:any) {

    const [Allpostes,setAllpostes]=useState(window.localStorage.savePostes?JSON.parse(window.localStorage.savePostes):false);
    const [specificSelect,setspecificSelect]=useState(false);



  return (
    <AllPost_Context.Provider value={{Allpostes,setAllpostes,specificSelect,setspecificSelect}}>
        {props.children}
    </AllPost_Context.Provider>
  ) 
}
