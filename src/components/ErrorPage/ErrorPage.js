import React from 'react'
import '../../styles/ErrorPage/ErrorPage.css'
import image from '../../static/error-crop.gif'


function ErrorPage ()  {
  return (
    <div className='error-page'>
      {/* <a href='/' className='error-page-home-link'><img src={logo} alt="dsa-vault-logo"/></a> */}
        <div className="error-page-container">

            <div className="error-page-content">

                  <h2>Oops... <br/>404 not found!</h2>
                  <img src={image} alt="error-page-gif"/>
                  <div className='error-page-text'>Looks like you're lost.</div>
                  <div className='error-page-subtext'>The page you're looking for isn't exist.</div>
                  <div onClick={
                      () => {
                          window.location.href = '/';
                      }
                  }
                  className='error-page-btn'>Go Home</div>
            </div>
        </div>


        <footer className='footer'>
                  
                  <div class="footer-text" >
                    © 2023 Copyright -
                    <a  href="/"> dsavault</a>
                  </div>
                
        </footer>
    </div> 
  );
};


export default ErrorPage

