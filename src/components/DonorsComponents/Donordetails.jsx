import React, { useState } from 'react'
import './DonorDetails.css'
import { IoCloseOutline } from 'react-icons/io5'
import { CgMail } from 'react-icons/cg'

const Donordetails = ({person,setModal}) => {
  const [data, setData] = useState(person)
  console.log(data)
  return (
    <div className='donorDetailsBody'>
      <div className='donorDetailsWrapper'>
        <div className='donorDetailsBoxCancleHead'><IoCloseOutline size={25} cursor="pointer" onClick={()=>setModal(false)}/></div>
        <div className='donorDetailsBoxHead'><span>Donation Details</span></div>
        <div className='donorDetailsUserDetails'>
          <div className='donorDetailsNameBox'>
            <div>{data.name}</div>
            <div>₦{data.amount}</div>
            <span>{data.date}</span>
          </div>
          <div className='donorDetailsPaymentType'>
            <div className='paymentTypeBoxHolder'>
              <div>Campaign</div>
              <span className='extraDetails'>{data.campaign}</span>
            </div>
            <div className='paymentTypeBoxHolder'>
              <div>Payment method</div>
              <span className='PayType'>Card</span>
            </div>
            
          </div>
        </div>
        <div className='donorDetailsBoxHead'><span>Donor Information</span></div>
        <div className='donordetailsInfoBox'>
          <div className='contactInfoLabel'>Contact information</div>
          <div className='contactInfoEmail'>Jackbrook@gmail.com</div>
          <div className='donorContactInfoEmailBox'><CgMail size={20}/>Email</div>
        </div>
        <div className='donorDetailsBoxHead'><span>Message</span></div>
        <div className='donorDetailsMessageBox'>{data.message}</div>
        <div className='donorDetailsBoxFoot'>
          <div className='detailsFootHoldBox'>
            <div style={{color: "#5C6062"}}>Transaction id</div>
            <div>1445786543</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donordetails