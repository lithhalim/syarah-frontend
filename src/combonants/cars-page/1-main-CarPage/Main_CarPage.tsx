import React, { useRef } from 'react';
import Footer_section from '../../homePage/11-Footer-section/Footer_section';
import Card_section from '../../homePage/Card_section';
import Select_Section from '../2-select-section/Select_Section';
import "./style/style.scss";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {AiTwotoneSliders} from "react-icons/ai"


let Datause=[
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://hips.hearstapps.com/hmg-prod/images/mazda-6-signature-skyactiv-d-turbo-diesel-1555529660.jpg",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.motortrend.com/uploads/2021/12/2022-honda-accord-sport-2-0t-15.jpg",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/3090b8e2cd6d15b4a07eb31144c0e1eab56fdf6f/hub/2021/06/28/ec07cfd4-a0e1-4b8d-ab28-2e86758d47cf/avalon-trd-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
]


function Main_CarPage() {
    const showItem=useRef<any>()

    //Data Get From Select Item Section 
    const GetDataSselect=(data:any)=>{
    }


    const ShowFilterItem=()=>{
        showItem.current.classList.toggle("active");

    }



  return (
    <div className='main-carpage'>
        <div className='container-information-section'  ref={showItem}>
            <Select_Section getDataSelect={GetDataSselect}/>
        </div>
        <div className='Item-container-section'>
            <ul className='item-select-containet'>
                <li onClick={ShowFilterItem}>
                    <span>Filter results</span>
                    <span className='icon'><AiOutlineAppstoreAdd/></span>
                </li>
                <li>
                    <span>Newer cars</span>
                    <span className='icon'><AiTwotoneSliders/></span>
                </li> 

            </ul>
            <div className='certified-container-section'>
                {Datause.map((data,i)=>(
                    <Card_section datause={data} key={i} />
                ))}
            </div>
            <div className='footer-section' > 
                <Footer_section type="other"/>
            </div>
        </div>

    </div>
  )
}

export default Main_CarPage
