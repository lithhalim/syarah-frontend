import axios from 'axios';
import React, {  useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


//you schema style validation 
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
     .label('Full Name')
     .max(16)
     .required(),
  email:Yup
    .string()      
    .email("Invalid email format")
    .required("Mail is required"),
  phoneNumber: Yup.number()
     .label('Number Phone')
     .required(),
  password: Yup.string()
     .label('Password')
     .min(2)
     .max(10)
     .required(),
   });
 


function Signupform() {
  const [regusterstatus,setregusterstatus]=useState(false);
  const Navi=useNavigate()
  const [verificationProblem,setVerificationProblem]=useState(false)


  const initialValues={
    fullName: '',
    email: '',
    phoneNumber: '',
    password:'',
}



const Get_AllData=(data)=>{
  //use to create random id
  const id=uuidv4();
  //data will send to the database
  const Random4digit = Math.floor(1000 + Math.random() * 9000);

  const {email,fullName,password,phoneNumber} =data;



    const alldata={
      regusterid:id,
      fullName:fullName,
      email:email,
      password:password,
      verification:Random4digit,
      phoneNumber:phoneNumber
    }

    axios.post(`${process.env.REACT_APP_API}signup`,{
        headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'      },
        alldata
      }).then().then((x)=>{
      //------------------------------If Email Is Ok Verify The Email------------------------------//
      if(x.data.status=="Email Is ok"){
        const decoded=btoa(`${alldata.email}:${alldata.password}`)

        //1- send request to sign in to get verefication code 
        axios.post(`${process.env.REACT_APP_API}signin`,{
          headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
        }).then((x)=>{
          //to verify the code to verify directly
                  if(x.data.varification=="You Are Not Verify") {
                      setVerificationProblem(x.data)
                      return
                  }
          }).catch((errors)=>{
              //if The Email Or The Password ARE WRONG
          });
      }else if(x.data.status=="Email Is Taken"){
              setregusterstatus(x.data.status)

      }
    })

}



const verifyEmail=()=>{    
  axios.post(`${process.env.REACT_APP_API}Nodemailer`,{
      headers:{'Content-Type':'application/json;charset=utf-8'},
      body:verificationProblem
  })
  Navi("/Verification")
}






  
  return (
    <div>
            <p className="small">or use your email for registration:</p>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={Get_AllData}
                >
                {({ errors, touched }) => (
                    <Form id="sign-up-form" >
                          <Field name="fullName"  placeholder="Full Name" type="text" className="cardNumber" />
                          {errors.fullName && touched.fullName ? (<div className='error-section'>{errors.fullName}</div>) : null}

                          <Field name="email" type="email" placeholder="ahmed@yahoo.com"  className="email"/>
                          {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}

                          <Field name="password" type="password" placeholder="********"  className="password"/>
                          {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}

                          <Field name="phoneNumber" type="tel" placeholder="+962 151515515"  className="phoneNumber"/>
                          {errors.phoneNumber && touched.phoneNumber ? <div className='error-section'>{errors.phoneNumber}</div> : null}


                          <button className="control-button up" type="submit">Sign Up</button>
                          {verificationProblem!==false?<Button variant="outlined" color="error" sx={{marginBottom:"15px"}} onClick={verifyEmail}> Press Here To Verify</Button>:<></>}
                          {regusterstatus!==false?<p style={{padding:"10px"}}>{regusterstatus}</p>:<></>}
                    </Form>
                )}
            </Formik>

    </div>
  )
}

export default Signupform
