import React, { useState } from 'react'
import './NpoSignup.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const NpoSignup = ({setActiveSignupPage}) => {


  const [loading, setLoading] = useState(false)
  const [organizationName, setOrganizationName] = useState('')
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow]= useState(false)
  const formData = {
    organizationName,
    registrationNumber,
    phoneNumber,
    email,
    password,
  }
  console.log(formData)


  return (
    <div className='npoSignUpBody'>
      <div className='signupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}>Sign in</span>
      </div>
      <div className='indSignupInputBox'>
        <h1 className='indSignupQusBox'>Tell us about your self</h1>
        <div className='indInputHoldBox'>
          Non-profit Name
          <input type="text" onChange={(e)=>setOrganizationName(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          RC Numcer
          <input type="text" onChange={(e)=>setRegistrationNumber(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Email Address
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Phone Number
          <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Password
          <div className='signupInputClone'>
            <input type={show ? 'text': 'password'} onChange={(e)=>setPassword(e.target.value)}/> 
            {
              show ? 
              <BsEyeSlash cursor="pointer" onClick={()=>setShow(false)}/>:
              <BsEye cursor="pointer" onClick={()=>setShow(true)}/>
            }
          </div>
        </div>
        <div className='signupPassHintBox'>
          Your Password must have:
          <span>At least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number</span>
        </div>
        <div className='TermsBox'>
          <input type="checkbox" name="" id="" /> I have read and agree to the Terms and Use and Private Policy
        </div>
        <button className='signupIndCreateBtn' onClick={()=>setActiveSignupPage("D")}>
          {
            loading? "Loading...": "Create Account"
          }
        </button>
        
      </div>
      <div className='mediaSignupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}>Sign in</span>
      </div>
    </div>
  )
}

export default NpoSignup