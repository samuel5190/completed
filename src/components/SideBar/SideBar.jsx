import React from 'react'
import './SideBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiBook, BiHome, BiWallet } from 'react-icons/bi'
import { BsMegaphone, BsPeople } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
// import Icon from '../../assets/Icon.svg'
// import Logo from '../../assets/Logo.svg'
import { IoIosLogOut } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { addUser, allCampaigns, myCampaigns, userRole, userToken } from '../../Global/slice'

const SideBar = () => {
  const dispatch = useDispatch()
  const Nav = useNavigate()
  const logout = ()=>{
    dispatch(addUser({}))
    dispatch(userRole(''))
    dispatch(userToken(''))
    dispatch(allCampaigns([]))
    dispatch(myCampaigns([]))
    Nav('/login')
  }
  return (
    <div className='sideBarBody'>
      <div className='sideBarWrapper'>
        <div className='logo'>
          <div className='imgFull'>
           {/* <img src={Logo} alt="" className='full' onClick={()=>Nav('/dashboard')}/> */}
          </div>
          <div className='logoSmall'>
            
            {/* <img src={Icon} alt="" onClick={()=>Nav('/dashboard')}/> */}
          </div>
        </div>
        <div className='navSide'>
          <ul className='nav'>
            <NavLink to={'/dashboard'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BiHome size={15}/><span>Home</span></NavLink>
            <NavLink to={'/campaign'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BsMegaphone size={15}/><span>Raise</span></NavLink>
            <NavLink to={'/donor'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BsPeople size={15}/><span>Donors</span></NavLink>
            <NavLink to={'/payout'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BiWallet size={15}/><span>Payout</span></NavLink>
            <NavLink to={'/account'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><FiSettings size={15}/><span>Account</span></NavLink>
            <div onClick={logout} className={({ isActive }) =>isActive ? "logOut end" : "HeaderNotActive end"}><IoIosLogOut /><span>Logout</span></div>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar