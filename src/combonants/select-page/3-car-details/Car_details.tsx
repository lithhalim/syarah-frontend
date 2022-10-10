import React from 'react';
import {BiBookBookmark} from "react-icons/bi";
import {CgPushRight} from "react-icons/cg";



import {BsKey} from "react-icons/bs";
import {AiOutlineCar} from "react-icons/ai"
import {BiTrim} from "react-icons/bi";
import {BsCalendarDate} from "react-icons/bs";
import {AiOutlineBgColors} from "react-icons/ai";
import {GrInstallOption} from "react-icons/gr" 
import {GiFuelTank} from "react-icons/gi";
import {TbManualGearbox} from "react-icons/tb";
import {TbBrandGoogleDrive} from "react-icons/tb";
import {MdOutlineBluetoothDrive} from "react-icons/md";
import {RiPinDistanceLine} from "react-icons/ri"



import "./style/style.scss"

function Car_details() {
  return (
    <div className='car-details-container'>
        <div className='header'>
            <h1>Car Details</h1>
            <ul>
                <li><BiBookBookmark style={{fontSize:"1.2em"}}/></li>
                <li>See the car inspection</li>
                <li><CgPushRight style={{fontSize:"1.2em"}}/></li>
            </ul>
        </div>

        <ul className='container-item'>
            <li><span><BsKey/></span> <span>Brand:</span> <span>Chevrolate</span> </li>
            <li><span><AiOutlineCar/></span> <span>Modal:</span> <span>Spark</span> </li>
            <li><span><BiTrim/></span> <span>Trim:</span> <span>Ls</span> </li>
            <li><span><BsCalendarDate/></span> <span>Year:</span> <span>2019</span> </li>
            <li><span><AiOutlineBgColors/></span> <span>Color:</span> <span>Red</span> </li>
            <li><span><GrInstallOption/></span> <span>Option:</span> <span>Stander</span> </li>
            <li><span><GiFuelTank/></span> <span>Fuel:</span> <span>Gas</span> </li>
            <li><span><TbManualGearbox/></span> <span>Drivetrain:</span> <span>FWD</span> </li>
            <li><span><TbBrandGoogleDrive/></span> <span>Cylinders:</span> <span>4</span> </li>
            <li><span><MdOutlineBluetoothDrive/></span> <span>Engine Size:</span> <span>1.4</span> </li>
            <li><span><RiPinDistanceLine/></span> <span>Kilometer:</span> <span>1505184 km</span> </li>
        </ul>
      
    </div>
  )
}

export default Car_details
