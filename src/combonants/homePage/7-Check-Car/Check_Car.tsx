import React from 'react';
import image1 from "../../../assest/check-car/check-car.webp";

import "./style/style.scss"

function Check_Car() {
  return (
    <div className='container-checkcar'>
        <h1 className='Header-Naame-section'>
            Check Car
        </h1>
        <div className='check-car-section'>
            <img src={image1} alt="" />
            <div className='text-area'>
                <h1>We renovate and prepare it</h1>
                <p>To receive your car in top condition, we undertake extensive maintenance and prepare it by professional technicians in specialized workshops integrated with the latest technologies</p>
            </div>
        </div>
    </div>
  )
}

export default Check_Car