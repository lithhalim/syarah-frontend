import React from 'react';
import "./style/style.scss";
import image1 from "../../../assest/finans/image1.webp";
import image2 from "../../../assest/finans/image2.webp"

function Financing_Options() {
  return (
    <>
        <div className='finans-option'>
            <h1> Financing Option</h1>
            <ul className='item-container'>
            <li>
                <img src={image1} alt="" />
                <p>We provide you with multiple financing options and through different financing bodies.</p>
            </li> 
            <li>
                <img src={image2} alt="" />
                <p>A specialized team finalizes the financing procedures to facilitate the financing process.</p>
            </li>
            </ul>
        </div>

        <button className='select-ioffers'>
            View financing offers
        </button>

    </>
  )
}

export default Financing_Options