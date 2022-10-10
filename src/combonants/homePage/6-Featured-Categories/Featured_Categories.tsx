import React from 'react';
import "./style/style.scss"

import image1 from "../../../assest/feautre/image1.webp";
import image2 from "../../../assest/feautre/image2.webp";
import image3 from "../../../assest/feautre/image3.webp";
import image4 from "../../../assest/feautre/image4.webp";

let Datause=[{image:image1,name:"lith"},{image:image2,name:"lith"},{image:image3,name:"lith"},{image:image4,name:"lith"},]


function Featured_Categories() {
  return (
    <div className='feature-catagories'>
        <h1 className='Header-Naame-section'>
            Featured Categories
        </h1>
        <div className='feautre-icon-container'>
            {Datause.map(({image,name},i)=>(
                <div className='icon' key={i}>
                    <div className='image-container'>
                        <img src={image} alt="" />
                    </div>
                    <button >View More</button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Featured_Categories