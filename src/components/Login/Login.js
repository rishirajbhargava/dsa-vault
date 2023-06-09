import {React, useEffect, useState} from 'react'
import '../.././styles/LoginPage/Login.css'
import '../.././styles/LoginPage/Form.css'
import Header from '../HomePage/Header'
import Svgs from '../HomePage/Svgs'
import googlelogo from '../../static/google-logo.png'
import whiteHome from '../../static/white-home.jpg'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import {motion } from 'framer-motion'





function Login(props) {

    const [error, setError] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const[isLoading, setIsLoading] = useState(true);
    const [isServerDown, setIsServerDown] = useState(false);
    const [isAlreadyHaveAccount, setIsAlreadyHaveAccount] = useState(false);

        useEffect(() => {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuser`, { withCredentials: true })
            .then((res) => {
                
                if(res.data.success){
                    setIsLoading(false);
                    setIsUserLoggedIn(true);
                    setError(false);
                }else{
                    setIsLoading(false);
                    setIsUserLoggedIn(false);
                    setError(true);
                }
            })
            .catch((err) => {
                
                setIsLoading(false);
                setIsServerDown(true);
            });
        }, []);


        

        function loginWithGoogle(){
            window.open(`${process.env.REACT_APP_BACKEND_URL}/googlelogin`, '_self');     
        }
        function handleClick(){
            loginWithGoogle();
        }

        function logOut(){
            window.open(`${process.env.REACT_APP_BACKEND_URL}/logout`, '_self');
        }
        

    return (
        <div className='login-page'>
            <Header theme={props.theme} />
            <div className='login-page-container'>
                <div className='login-page-content'>
                <div>
                    </div>
                    {/* { !error? <div className='warning-divs login-margin-util already-login' > <p>You are already logged in!</p>  </div>:  <div className='warning-divs login-margin-util' > <p>Please Login to Continue!</p> </div>} */}

                    <motion.div className='login-form-container'>
                   
                        <motion.form 
                        initial={{opacity:0, x:-50}}
                        animate={{opacity:1,x:0}}
                        transition={{duration:0.3}}
                        
                        className="form">
                         
                            <motion.h3 
                                    initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.05}}
                                    
                            
                            >Login<br/> <span className='dsa-vault-logo-login'>Dsa Vault</span></motion.h3>

                            {isLoading ?< Skeleton  width={290} height={65} className='inputBox'   /> 
                            : 
                            <> {isServerDown ? <motion.div 
                                  initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.15}}
                            
                             className='inputBox warning-red-bg'>
                                    <span><i class="fa-solid fa-server"></i>Server is Down!</span>
                            </motion.div> : <>
                                {isUserLoggedIn ? 
                                    <motion.div
                                     initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.15}}
                            
                                     className='inputBox already-login-in'>  
                                    <span >Logged In</span>
                                    </motion.div>
                                    :
                                    <motion.div 
                                    
                                    initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.15}}
                            
                            className="inputBox" onClick={handleClick} >  
                                    <span ><img src={googlelogo} alt="google-logo"/>Continue With Google</span>
                                    </motion.div>
                                    }</>}
                            </>
                             }

                            <motion.a  href='/'
                            initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.30}}
                             className="inputBox go-home-btn">
                                
                                
                                <img src={whiteHome} alt="home-logo"/> 
                                 Go home
                            </motion.a>

                            <motion.div 
                             initial={{opacity:0, x:-50}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.5 ,delay:0.45}}
                            
                            className='login-signup-switch'>
                           { isUserLoggedIn ? <p  className='link'onClick={logOut}>Log Out?</p> : <p  className='link'>Leave Site?</p>}
                           
                           </motion.div>
                     </motion.form>
                     
                    </motion.div>

                </div>
               

            </div>
            {/* <ThemeButton theme={props.theme} setTheme={props.setTheme} /> */}
            <Svgs theme={props.theme} />
        </div>
    )
}

export default Login
