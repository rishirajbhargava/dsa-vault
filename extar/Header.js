import React from 'react'
import '../../styles/Additional/Header.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import userProfile from '../../static/user2.svg'
import logo from '../../static/logo.png'
import logo2 from '../../static/logo2.png'


function Header(props) {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const refOne = React.useRef(null);

  useEffect(() => {
    axios.get('http://localhost:9000/login/success', { withCredentials: true })

      .then(res => {
        if (res.data.success) {
          setUser(res.data.user);
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
          window.alert('Please Login to continue');
        }
      })
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  },[]);

  const handleClickOutside=(e)=> {
      if(refOne.current && !refOne.current.contains(e.target)){
        setIsProfileMenuOpen(false);
      }

  }


  function logOut() {
    window.open('http://localhost:9000/logout', "_self");

  }



  function handleChange() {
    return (
      setIsNavExpanded(false)
    )
  }





  return (
    <div>
      <header className={props.theme ? 'header-2' : 'header-2-dark'}>
        <a className={props.theme ? 'brand-light' : 'brand-dark'} href='/'><img src={props.theme ? logo : logo2} alt="logo" /></a>

        <ul>

          <li><a href="/">HOME</a></li>
          {props.page !== 'topics' ? <li><a href="/topics">TOPICS</a></li> : ''}

          <li className="header-profile-pic" onClick={() =>
            setIsProfileMenuOpen(!isProfileMenuOpen)
          }><img src={user == null ? userProfile : user.photo} alt="profileImage" /></li>
        </ul>

        <i onClick={() => setIsNavExpanded(!isNavExpanded)} className="fa-solid fa-bars-staggered mobile-menu"></i>

      </header>
      <div ref={refOne} className={isProfileMenuOpen ? 'profile-menu' : 'profile-menu-close'}>
        {user === null ? <h4> <a className='login-link' href='/login'>Login</a> <br/> to Continue</h4> : <h4> {user.displayName}</h4>}
        <ul className='profile-menu-ul'>

          <li><a href="/profile">PROFILE</a></li>
          <li className='border-util'><a href="/about">ABOUT US</a></li>
          {isUserLoggedIn ? <li className="liAsA" onClick={logOut}> LOGOUT</li> : <li><a href="/login">LOGIN</a></li>}
        </ul>


      </div>


      <div className={isNavExpanded ? `${props.theme ? "mobile-nav open-menu" : "mobile-nav-dark open-menu"}` : `mobile-nav closed-menu`}   >
        <div>
          <i onClick={handleChange} className="fa-solid fa-xmark close-mobile-menu"></i>
          <ul>
            <li onClick={handleChange} ><a href="/">HOME</a></li>
            <li onClick={handleChange} ><a href="/topics">TOPICS</a></li>
            <li onClick={handleChange} > <a href="/profile">PROFILE</a></li>
            {user===null ? <li onClick={handleChange} ><a href="/login">LOGIN</a></li> : <li onClick={()=>
            { logOut();
             handleChange();
            }} >LOGOUT</li>}
           


          </ul>
        </div>



        <div className={props.theme ? 'nav-social' : 'nav-social-dark'}>
          <p>Get in touch</p>
          <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rishirajbhargava/" className="nav-socials-links">
            <i className="fa-brands fa-linkedin"></i></a>
          <a aria-label="github" rel="noreferrer" target="_blank" href="https://www.github.com/rishirajbhargava/" className="nav-socials-links">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}


