import React from 'react';
import { useNavigate } from 'react-router';
import Card_section from '../Card_section';
import "./style/style.scss"



let Datause=[
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://hips.hearstapps.com/hmg-prod/images/mazda-6-signature-skyactiv-d-turbo-diesel-1555529660.jpg",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.motortrend.com/uploads/2021/12/2022-honda-accord-sport-2-0t-15.jpg",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/3090b8e2cd6d15b4a07eb31144c0e1eab56fdf6f/hub/2021/06/28/ec07cfd4-a0e1-4b8d-ab28-2e86758d47cf/avalon-trd-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",price:30,month_Payment:300},
    {name:"lexsus rx  2020 " ,image :"https://www.cnet.com/a/img/resize/c0a623579f2b506f79ecc5b5e3c5f86076bd9153/hub/2021/06/10/7878945f-f5e5-47ee-9435-81fe26c65d8b/mazda6-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",price:30,month_Payment:300},
]
function Certified_Used() {
    const Navi=useNavigate()

    const gotopage=()=>{
        Navi("/pages")
    }
  return (
    <div className='certified-user'>
        <h1 className='Header-Naame-section'>
            Certified Used
        </h1>

        <div className='certified-container'>
            {Datause.map((data,i)=>(
                <div onClick={gotopage}>
                    <Card_section datause={data} key={i}  />
                </div>
            ))}

        </div>

        <button className='see-allUsed-car'>
            See All Used Cars
        </button>

    </div>
  )
}

export default Certified_Used