import React from 'react';
import image1 from "../../../assest/traint/tradibn.webp"


function First_section() {
  return (
    <div className='first-section'>
        <ul className='text-area'>
            <li><h3>Trade/ Sell Your Car</h3></li>
            <li className='middel'><h1>Within 24 hours</h1></li>
            <li><h5>We pay instantly and without any costs</h5></li>
        </ul>
        <img src={image1} alt="" />
    </div>
)
}

export default First_section