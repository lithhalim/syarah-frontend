import React, { useState } from "react";



//use to create the context 
export const Trade_Information_Context=React.createContext<any|null>(null);


export function Trade_Information_Provider(props:any) {

    const [SelectStage,setSelectStage]=useState({stage:"one"});
    const [selectPage,setselectPage]=useState(window.localStorage.savePage?window.localStorage.savePage:false)



  return (
    <Trade_Information_Context.Provider value={{SelectStage,setSelectStage,selectPage,setselectPage}}>
        {props.children}
    </Trade_Information_Context.Provider>
  ) 
}
