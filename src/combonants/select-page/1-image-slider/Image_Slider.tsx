import React from 'react';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style/style.scss";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



interface ImageSection{
    createdAt:string,
    id:number,
    imageUrl:string,
    image_for_postid:string,
    updatedAt:string
}

function Image_Slider({images}:any) {
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
                {images.map(({imageUrl}:ImageSection,i:any)=>(
                    <SwiperSlide key={i}> 
                        <div className='Slider-items'>
                            <img src={imageUrl} alt="" />
                        </div>      
                    </SwiperSlide>                  
                ))}
            </Swiper>
    </div>
  )
}

export default Image_Slider
