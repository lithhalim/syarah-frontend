import React from 'react';
import {FcClock} from "react-icons/fc";
import {GiBellows} from "react-icons/gi";
import {MdOutlineLowPriority} from "react-icons/md";

import "./style/style.scss"

function Main_Information() {
  return (
    <div className='container-select-main-information'>
        <ul className='number-views'> 
            <li><FcClock style={{fontSize:"1.4em",marginTop:"5px"}}/></li>
            <li className='number' style={{fontSize:"1.2em"}}>3</li>
            <li>Persons Viewed This Car Is In The Last Hours</li>
        </ul>
        <ul className='title-section'>
            <li className='name'>
                Merscedes G63 2020 Full 
            </li>
            <li className='milage'>Less than 50,000 km per year</li>
            <li className='icon'>
                <span><GiBellows style={{marginTop:"4px" ,marginRight:"4px"}}/> Low Mileage </span>
                <span><MdOutlineLowPriority style={{marginTop:"4px" ,marginRight:"4px"}}/> Perfect Conditions </span>
            </li>
        </ul>

        <ul className='price-section'>
            <p>price</p>
            <h1>7540540 <span>SAR</span></h1>
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
