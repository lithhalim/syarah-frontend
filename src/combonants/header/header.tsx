import React, { useEffect, useRef } from 'react';
import  logo from "../../assest/logo.png";
import {VscThreeBars} from "react-icons/vsc";
import "./style/style.scss";
import { useNavigate } from 'react-router';
  

interface TypeShown{
  type:string
}

function Header({type}:TypeShown) {
  const Navi=useNavigate();
  const selectHeader=useRef<any|null>(null);

  const gotoTrade=()=>{Navi("/traint")}

  const goHomePaage=()=>{Navi("/")}

  const header_clicker=(event:any)=>{
    //data will get specific car
    let dataGo= event.target.textContent

    //remove all active 
    selectHeader.current.childNodes.forEach((data:any)=>((data.classList.remove("active")) ))

    //set the active in the element select
    event.target.classList.add("active")
    Navi("/cars")
  }


  useEffect(()=>{
    selectHeader.current.childNodes.forEach((data:any)=>((data.addEventListener("click",header_clicker)) ))
  },[])


  

  return (
    <div className='header-container'>
        <img src={logo} alt=""  onClick={goHomePaage} style={{cursor:"pointer"}}/>

            <div className='button-sontainer'>
                <ul className={`Nav-bar-container ${type}`} ref={selectHeader}>
                    <li className='active' >Certified User</li> 
                    <li>New</li>
                    <li>Classifieds</li>
                </ul>
                <button className='create-post' onClick={gotoTrade}>
                    Trade/Sell Your Car
                </button>

                <span className='Nav-bar'>
                  <VscThreeBars/>
                </span>
            </div>

    </div>
  )
}

export default Header
