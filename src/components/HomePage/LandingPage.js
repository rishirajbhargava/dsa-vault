
import React from 'react'
import '../../styles/LandingPage/LandingPage.css'
import {motion } from 'framer-motion'

function LandingPage(props) {
    return (
        <div  className= {props.theme?'landing-page': 'landing-page-dark'}>

            <motion.div 
            // initial={{opacity:0, y:-50}}
            // animate={{opacity:1,y:0}}
            // transition={{duration:0.5}}
            className={props.theme? 'landing-page-content light-landing-page' :'landing-page-content' }>

                <motion.div 
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:0.38}}
                className={props.theme?'landing-page_left':'landing-page_left_dark'}>
                    <h3><span className='welcome-note'>Welcome </span> <br/><span className={props.theme?'color-util-light':'color-util-dark' }> to Dsa.<span className={props.theme?'landing-page-heading-light':'landing-page-heading-dark' }>vault</span></span><span className='rocket'>🚀</span></h3>
                    <p>Your gateway to crack DSA.</p>
                    <a className="landing-page-btn-1"href="/topics">Get Started<i className="fa-solid fa-paper-plane"></i></a>
                </motion.div>

                <motion.div
                     initial={{opacity:0, x:50}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:0.38}}
                 className={props.theme?'landing-page_right':'landing-page_right-dark'}>
                    <div className='right-text'>
                        <h3>What is <span>DSA Vault</span> ?</h3>
                        <p className='tag-line'>Level up your coding skills</p>
                        <p className='description'>Our website provides a selected Data Structures and Algorithms (DSA) questions from various platforms, including <em>LeetCode, HackerRank, GeekforGeeks,</em> and more. Questions are filtered by difficulty level and topic. Perfect for those preparing for coding interviews or looking to improve their DSA skills.</p>
                        <a className="landing-page-btn-2" href="/topics"> Get Started<i className="fa-solid fa-paper-plane"></i></a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LandingPage;
