import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Datause from "../../../All-brand-logo/Brands_Logo_All";
import { AllPost_Context } from '../../../context-api/all-Post-data';
import "./style/style.scss";


function Browse_by_brand() {
    const [showAllbrand,setshowAllbrand]=useState(false);
    const Navi=useNavigate()
    const AllPost_Contextitem=useContext(AllPost_Context)


    const ShowOrHide=()=>{
        showAllbrand==false?setshowAllbrand(true):setshowAllbrand(false);
        document.querySelector(".Brand-container")?.classList.toggle("active")
    }


    const gotoPageSelectSpecificBrand=(event:any)=>{
        let CarBrand=(event.currentTarget.getAttribute("datatype"))
        AllPost_Contextitem.setspecificSelect({CarBrands:CarBrand})
        Navi("/cars")

    }

  return (
    <div className='brwoser-brand-section'>
        <h1 className='Header-Naame-section'>
            Browse by brand
        </h1>
        <div className='Brand-container' >
            {Datause.map(({image,name}:any,i:any)=>(
                <div className='brand-icon' key={i}  onClick={gotoPageSelectSpecificBrand} datatype={name}>
                    <img src={image} alt="" />
                    <p>278 car</p>
                </div>            
            ))}
        </div>

        <button className='Show-allbrands' onClick={ShowOrHide}>
            {showAllbrand==false?"Hide All brands":"See all brands"}
        </button>

    </div>
  )
}

export default Browse_by_brand