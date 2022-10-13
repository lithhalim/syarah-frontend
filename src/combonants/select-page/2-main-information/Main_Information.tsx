import React from 'react';
import {FcClock} from "react-icons/fc";
import {GiBellows} from "react-icons/gi";
import {MdOutlineLowPriority} from "react-icons/md";

import "./style/style.scss"

function Main_Information({mainInformation}:any) {
    const {fullName,Price,kilometer,Condition,PhoneNumber,CarBrands,Option}=mainInformation
  return (
    <div className='container-select-main-information'>
        <ul className='number-views'> 
            <li><FcClock style={{fontSize:"1.4em",marginTop:"5px"}}/></li>
            <li className='number' style={{fontSize:"1.2em"}}>3</li>
            <li>Persons Viewed This Car Is In The Last Hours</li>
        </ul>
        <ul className='title-section'>
            <li className='name' >
                {CarBrands} {Condition} {Option}
            </li>
            <li className='milage'>The Milage Of Car{kilometer}</li>
            <li className='icon'>
                <span><GiBellows style={{marginTop:"4px" ,marginRight:"4px"}}/> Low Mileage </span>
                <span><MdOutlineLowPriority style={{marginTop:"4px" ,marginRight:"4px"}}/> Perfect Conditions </span>
            </li>
        </ul>

        <ul className='price-section'>
            <p>price</p>
            <h1>{Price} <span>SAR</span></h1>
            <span>The Price Ibclude VAT</span>
        </ul>

        <ul className='Butten-select'>
            <li>Book It Now 500 SAR</li>
            <li>Call Us To Book</li>
        </ul>
        

    </div>
  )
}

export default Main_Information
