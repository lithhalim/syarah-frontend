import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {MdOutlineAddAPhoto} from "react-icons/md"
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import uuid from 'react-uuid';







function Car_Details2({DataSaveFirst}) {

  const [imageSaver,setImageSaver]=useState([])
  const Navi=useNavigate()

    const initialValues={
        fullname: '',
        phoneNumber:'',
        imagesection:'',
        price:"0"
      }
      


    const getImage_file=async(e)=>{
                //get the file i will uolodad
                let file=e.target.files[0]

                //create new Form data to can upload on cloudaniry
                const formData = new FormData();

                formData.append("file",file);
                //setting ---> upload--->unsignd upload ---->Upload presets {"lobdevu9"} from cloudinary for unsiged name 
                formData.append('upload_preset', 'ugtx75zu');
                //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
            const uploadOnClodinary=await axios.post("https://api.cloudinary.com/v1_1/lithhalim/upload",formData).then((alldata)=>{
                setImageSaver((oldStatus)=>([...oldStatus,alldata.data.secure_url]))
            })
        }








          const getAllData = (e) =>{}  

            const getDataHave=()=>{
              let Name=document.querySelector(".container-inputs").fullname.value
              let PhoneNumber=document.querySelector(".container-inputs").phoneNumber.value
              let Price=document.querySelector(".container-inputs").price.value;

              if(Name!==""&&PhoneNumber!==""&&Price!==""){
                const {Option,Condition,kilometer,CarBrands,Color,Gear,Fuel,EngineSize,ShapeCars}=DataSaveFirst
                  let AllDataHave={
                    fullName:Name,PhoneNumber:PhoneNumber,imagesHave:imageSaver,Price:Price,postId:uuid(),
                    Option:Option,Condition:Condition,kilometer:kilometer,CarBrands:CarBrands,Color:Color,Gear:Gear,Fuel:Fuel,EngineSize:EngineSize,Origin:"Jordan",ShapeCars:ShapeCars
                  }

                  axios.post(`${process.env.REACT_APP_API}createpost`,AllDataHave)
                  window.location.href="/"

              }
              
              

            }





    return (
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={getAllData}
            >
            {({ errors, touched }) => (

                    <Form className='container-inputs'>
                            <Field type="text" className='input-section'  placeholder='Full Name' name='fullname'/>
                            {errors.fullname && touched.fullname ? <div className='error-section'>{errors.fullname}</div> : null}


                            <Field type="text" className='input-section'  placeholder='Phone Number' name='phoneNumber'/>
                            {errors.phoneNumber && touched.phoneNumber ? <div className='error-section'>{errors.phoneNumber}</div> : null}


                            <Field type="number" className='input-section'  placeholder='Price' name='price'/>
                            {errors.price && touched.price ? <div className='error-section'>{errors.price}</div> : null}


                            <Button variant="contained" component="label" className='stylebutton'>
                                Upload Image <span><MdOutlineAddAPhoto/></span>
                                <Field hidden accept="image/*" multiple type="file" name="imagesection" onChange={getImage_file} />
                            </Button>
                            <div className='container-image-upload'>
                                {imageSaver.length>0?imageSaver.map((a,i)=>(<img src={a} key={i} alt="" className='style-image-section'/>)):<></>}
                            </div>

                            <input type="submit" value="Submit Dat" className="submit-button-section"  onClick={getDataHave} />


                    </Form>)}
            </Formik>   
    
  )
}

export default Car_Details2




//you schema style validation 
const SignupSchema = Yup.object().shape({
    fullname:Yup.string()
      .label('Full Name Required')
      .required(),
    phoneNumber: Yup.number()
       .label('Phone Number')
       .required(),
    imagesection: Yup.string()
    .label('Image Section')
    .required(),
    price:Yup.number()
    .label("Insert Price")
    .required()
     })
  
  
  