import React from 'react';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import image1 from "../../../assest/slider-background/slider1-d.webp";
import image2 from "../../../assest/slider-background/slider2-d.webp";
import image3 from "../../../assest/slider-background/slider3-d.webp"

import "./style/style.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Home_Page_Slider() {
  return (
    <div className='swiper-container-all'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]} //moduls will be active
            spaceBetween={50}//the space between item
            slidesPerView={1}//number of item in one page
            navigation //right and left button
            pagination={{ clickable: true }}//you can click right and left
            scrollbar={{ draggable: true }}//you can dragg element
            >
                <SwiperSlide>
                  <div className='slider-item-1'>
                    <img src={image1} alt="" />
                    <button className='select-button-slider'>Browse All Used Cars</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className='slider-item-2'>
                    <img src={image2} alt="" />
                    <button className='select-button-slider'>Browse All Used Cars</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide> 
                  <div className='slider-item-3'>
                    <img src={image3} alt="" />
                    <button className='select-button-slider'>Browse All Used Cars</button>
                  </div>      
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Home_Page_Slider