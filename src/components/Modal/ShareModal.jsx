import React, { useState } from 'react'
import './ShareModal.css'
import { IoCloseOutline } from 'react-icons/io5'
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

const ShareModal = ({setShareModal,ev}) => {
  const [link, setLink] = useState(`https://kindraise.vercel.app/${ev}`)
  return (
    <div className='shareModalBody'>
      <div className='shareModalWrapper'>
        <div className='shareModalHead'>
          <h3>Share: Your sharing matters!</h3>
          <div onClick={()=>setShareModal(false)}><IoCloseOutline size={30} cursor="pointer"/></div>
        </div>
        <div className='shareModalTextBox'>Did you know that fundraiser shared across multiple channels <span>raise as much as 6.5x more funds?</span>  It is thanks to you that this fundraiser has a chance to be successful!</div>
        <div className='shareOnSocialsBox'>
          <div className='shareOnSocialsText'>Share on socials</div>
          <div className='shareOnSocialsIcons'>
            <a href="https://www.facebook.com">
          <FaFacebook size={45} cursor="pointer" color='#1877F2' />
            </a>
            <a href="https://www.instagram.com">
          <FaInstagram size={45} cursor="pointer" color='#BC3081 cursor="pointer"'/>
            </a>
            <a href="https://www.twitter.com">
          <FaTwitter size={45} cursor="pointer" color='#1DA1F2'/>
            </a>
            <a href="https://www.linkedin.com">
          <FaLinkedin size={45} cursor="pointer" color='#0A66C2'/>
            </a>
          </div>
        </div>
          <div className='shareOnMessangerBox'>
            <div className='shareOnMessangerText'>Share on messenger</div>
            <div className='shareOnMessangerIcon'>
              <a href="https://www.facebook.com">
              <FaFacebookMessenger size={45} color='#007FFF'/>
              </a>
              <a href="https://www.whatsapp.com">
              <RiWhatsappFill size={45} color='#67C15E'/>
              </a>
            </div>
          </div>
          <div className='campaignUrlBox'>
            <span>
              Campaign URL
            </span>
            <div className='campaignBoxInputHolder'>
              <input type="text" value={link}/>
              <button>copy</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ShareModal