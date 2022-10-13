import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AllPost_Context } from '../../../context-api/all-Post-data';
import { Trade_Information_Context } from '../../../context-api/Select-Trade';
import Loading from '../../loading-section/loading';
import Card_section from '../Card_section';
import "./style/style.scss"



function Certified_Used() {
    const Navi=useNavigate()
    const PostContext=useContext(AllPost_Context)
    const selectPage=useContext(Trade_Information_Context)

    
    const {data,isFetching} = useQuery(['getAllOpstes'], async()=>{
      let DataUse=await axios.get(`${process.env.REACT_APP_API}getPost`)
      PostContext.setAllpostes(DataUse.data)
      window.localStorage.savePostes=JSON.stringify(DataUse.data)
      return DataUse.data
    })

    if (isFetching){return <Loading/>}


    const gotopage=(event:any)=>{
        let postId=event.currentTarget.getAttribute("datatype")
        selectPage.setselectPage(postId)
        Navi("/pages")
    }

  return (
    <div className='certified-user'>
        <h1 className='Header-Naame-section'>
            Certified Used
        </h1>

        <div className='certified-container'>
            {data!==undefined? data.map((data:any,i:any)=>(
                <div onClick={gotopage} datatype={data.postId}  key={i}>
                    <Card_section datause={data} key={i}  />
                </div>
            )):<></>}

        </div>

        <button className='see-allUsed-car'>
            See All Used Cars
        </button>

    </div>
  )
}

export default Certified_Used