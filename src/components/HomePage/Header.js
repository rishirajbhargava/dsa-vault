import { React, useState, useEffect, useRef } from 'react'
import '../../styles/Additional/Header.css'
import logo from '../../static/logo.png'
import logo2 from '../../static/logo2.png'
import axios from 'axios';
import userProfile from '../../static/user2.svg'

function Header(props) {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);


  const ref = useRef(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/login/success`, { withCredentials: true })

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
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      console.log('clicked outside');
      setIsProfileMenuOpen(false);
    } else {
      console.log('clicked inside');
    }

  }


  function logOut() {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/logout`, "_self");

  }


  function handleChange() {
    return (
      setIsNavExpanded(false)
    )
  }


  return (
    <div>

      <header className={props.theme ? 'header' : 'header-dark'}>
        <a className={props.theme ? 'brand-light' : 'brand-dark'} href='/'><img src={props.theme ? logo : logo2} alt="logo" /> </a>
        <ul>
        

          {props.page === 'profile' ? <li><a href="/">HOME</a></li> : null}
          <li><a href="/topics">TOPICS</a></li>
          {props.page === 'profile' ? null : <li><a href="/about">ABOUT US</a></li>}
          <li className="header-profile-pic" onClick={() =>
            setIsProfileMenuOpen(true)
          }><img src={user === null ? userProfile : user.photo} alt="img" /></li>
        </ul>
        <i onClick={() => setIsNavExpanded(!isNavExpanded)} className="fa-solid fa-bars-staggered mobile-menu"></i>
      </header>

      <div ref={ref} className={isProfileMenuOpen ? 'profile-menu' : 'profile-menu-close'}>
        {user === null ? <h4>Login to Continue</h4> : <h4> {user.displayName}</h4>}
        <ul className='profile-menu-ul'>
          <li><a href="/">HOME</a></li>
          <li><a href="/profile">PROFILE</a></li>

          <li className='border-util'><a href="/about">ABOUT</a></li>
          {isUserLoggedIn ? <li className="liAsA" onClick={logOut}> LOGOUT</li> : <li><a href="/login">LOGIN</a></li>}
        </ul>


      </div>


      <div className={isNavExpanded ? `${props.theme ? "mobile-nav open-menu" : "mobile-nav-dark open-menu"}` : `mobile-nav closed-menu`}   >
        <div>
          <i onClick={handleChange} className="fa-solid fa-xmark close-mobile-menu"></i>
          <ul>
           
            <li className="header-profile-pic-2" onClick={() =>
              setIsProfileMenuOpen(true)
            }><img src={user === null ? userProfile : user.photo} alt="img" />
            {user === null ? <h4>Login to Continue</h4> : <h4> {user.displayName}</h4>}
            </li>


            <li onClick={handleChange} ><a href="/">HOME</a></li>
            <li onClick={handleChange} ><a href="/topics">TOPICS</a></li>
            <li onClick={handleChange} ><a href="/profile">PROFILE</a></li>
            <li onClick={handleChange} ><a href="/about">ABOUT</a></li>

            {user === null ? <li onClick={handleChange} ><a href="/login">LOGIN</a></li> : <li className='liAsA' onClick={() => {
              logOut();
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

export default Header
