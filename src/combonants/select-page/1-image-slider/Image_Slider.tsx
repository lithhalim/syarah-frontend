import React from 'react';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style/style.scss";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



let DataUse=[
"https://www.mazda.ph/wp-content/uploads/2022/01/mazda-cx9-banner-update-1.jpg",
"https://cdn.jdpower.com/JDPA_Mazda%20Vision%20Coupe%20Front.jpg",
"https://www.mazda.ph/wp-content/uploads/2022/01/mazda-cx9-banner-update-1.jpg",
"https://cdn.jdpower.com/JDPA_Mazda%20Vision%20Coupe%20Front.jpg",
]

function Image_Slider() {
  return (
    <div className='swiper-container2-all'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]} //moduls will be active
            spaceBetween={50}//the space between item
            slidesPerView={1}//number of item in one page
            navigation //right and left button
            pagination={{ clickable: true }}//you can click right and left
            scrollbar={{ draggable: true }}//you can dragg element
            >
                {DataUse.map((data)=>(
                    <SwiperSlide> 
                        <div className='Slider-items'>
                            <img src={data} alt="" />
                        </div>      
                    </SwiperSlide>                  
                ))}
            </Swiper>
    </div>
  )
}

export default Image_Slider
