import React from 'react'
import Footer_section from '../homePage/11-Footer-section/Footer_section'
import Image_Slider from './1-image-slider/Image_Slider'
import Main_Information from './2-main-information/Main_Information'
import Car_details from './3-car-details/Car_details'
import Werranty_section from './4-werranty/Werranty-section'

function Select_Page_Main() {
  return (
    <>
        <div className='container-data-selectPage'>
            <Image_Slider/>
            <Main_Information/>
            <Car_details/>
            <Werranty_section/>
        </div>    
    </>
  )
}

export default Select_Page_Main
