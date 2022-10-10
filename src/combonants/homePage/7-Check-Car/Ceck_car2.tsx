import React from 'react'
import image2 from "../../../assest/check-car/check-car2.webp";
import "./style/style.scss"

function Ceck_car2() {
  return (
    <div className='check-car2-conrtainer'>
            <div className='text-area'>
                <h1>Exchange your car and sell it at the best price</h1>
                <p>To receive your car in top condition, we undertake extensive maintenance and prepare it by professional technicians in specialized workshops integrated with the latest technologies</p>
                <button>
                    Book a free examination
                </button>
            </div>
            <img src={image2} alt="" />

    </div>
  )
}

export default Ceck_car2