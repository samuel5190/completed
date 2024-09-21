import React, { useState } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { Sling as Hamburger } from 'hamburger-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state.kindraise)
  console.log(token,"user")

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const proceed =()=>{
    if (!token) {
      navigate('/')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="header-wrapper">
      <header className="header-content">
        <img
          src={logo}
          alt="Logo"
          className="header-logo"
          onClick={proceed}
        />
        <div className="header-hamburger">
          <Hamburger toggled={isMenuOpen} toggle={handleHamburgerClick} />
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'show-nav' : ''}`}>
          <button className="nav-button" onClick={() => navigate('/explore-campaigns')}>
            Campaigns
          </button>
          <button className="nav-button" onClick={() => navigate('/search')}>
            <CiSearch /><span>Search</span>
          </button>
          <button onClick={() => navigate('/login')} className="auth-button auth-login">
            About
          </button>
          <button onClick={() => navigate('/login')} className="auth-button auth-login">
            Login
          </button>
          <button onClick={() => navigate('/signup')} className="auth-button auth-signup">
            Signup
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
