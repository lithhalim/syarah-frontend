import React, { useContext, useEffect, useRef, useState } from 'react';
import Footer_section from '../../homePage/11-Footer-section/Footer_section';
import Card_section from '../../homePage/Card_section';
import Select_Section from '../2-select-section/Select_Section';
import "./style/style.scss";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {AiTwotoneSliders} from "react-icons/ai"
import { AllPost_Context } from '../../../context-api/all-Post-data';
import { useNavigate } from 'react-router';
import { Trade_Information_Context } from '../../../context-api/Select-Trade';


function Main_CarPage() {
    const showItem=useRef()
    const AllpostContext=useContext(AllPost_Context)
    const SelectPagecontext=useContext(Trade_Information_Context)
    const Navi=useNavigate()
    let [Datause,setDatause]=useState(AllpostContext.Allpostes)



    //--------------------------------------select page information -----------------------------------//
    const GetDataSselect=()=>{
        let datause=window.localStorage.savaselectdata?JSON.parse(window.localStorage.savaselectdata):false
        if(datause!==false){
            let newdata=AllpostContext.Allpostes.filter((datanew,i)=>(
                datause[Object.keys(datause)[0]].includes(datanew[Object.keys(datause)[0]])
                ))
            setDatause(newdata)    
        }
    }
    

    //-------------------------------------select catagory --------------------------------------------//
    useEffect(()=>{
        if(AllpostContext.specificSelect!==false){
            let  keyBrand=Object.keys(AllpostContext.specificSelect)
            let newData=AllpostContext.Allpostes.filter((datanew,i)=>(
                AllpostContext.specificSelect[Object.keys(AllpostContext.specificSelect)[0]].includes(datanew[Object.keys(AllpostContext.specificSelect)[0]])
            ))
            setDatause(newData)            
        }
    },[])





    //show the filter item select
    const ShowFilterItem=()=>{
        showItem.current.classList.toggle("active");
    }


    //----------------------------------go to select page ===========================================//
    const gotopage=(event)=>{
        let postId=event.currentTarget.getAttribute("datatype")
        SelectPagecontext.setselectPage(postId)
        window.localStorage.savePage=postId
        Navi("/pages")
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
                {Datause!==false?Datause.map((data,i)=>(
                    <div onClick={gotopage} datatype={data.postId} key={i}   >
                        <Card_section datause={data} />
                    </div>
                )):<></>}
            </div>
            <div className='footer-section' > 
                <Footer_section type="other"/>
            </div>
        </div>

    </div>
  )
}

export default Main_CarPage
