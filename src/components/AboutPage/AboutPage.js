import { React, useEffect, useState } from 'react'
import '../../styles/AboutPage/AboutPage.css'
import FeedbackPopUp from './FeedbackPopUp'
import axios from 'axios'
import { motion } from 'framer-motion'


function AboutPage(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/login/success`, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  const [isFeedbackPopUpOpen, setIsFeedbackPopUpOpen] = useState(false);
  const email = 'rishirajbhargava00@gmail.com'
  return (
    <div className='about-page'>

      {isFeedbackPopUpOpen && <FeedbackPopUp setIsFeedbackPopUpOpen={setIsFeedbackPopUpOpen} user={user} />}

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.27 }}

        className='header-about-page'>
        <div className='logo-about'>
          DSA.<span>Vault</span>
        </div>

        <ul className='about-nav'>
          <li className='liAsA'><a href='/'>HOME</a></li>
          <li onClick={() => {
            setIsFeedbackPopUpOpen(true)
          }} className='liAsA'>FEEDBACK</li>
        </ul>

      </motion.div>

      <motion.div

        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.27 }}


        className='about-page-container'>

        <div className="about-content">

          <motion.h1 initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.27, delay: 0.1 }}>About This Project!</motion.h1>

          <div className='about-text'>

            <motion.p initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.27, delay: 0.2 }}>
              This project is a MERN Stack project that I made to learn more about ReactJs & NodeJs and to practice my skills.
              <br />
              Whole project is made in custom CSS (no CSS framework used).
              <br />
              <br />
            </motion.p>

            <motion.p initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.27, delay: 0.3 }} className='tech-heading'>Tech, Tools & Libraries used :</motion.p>

            <motion.div initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.27, delay: 0.4 }} className='tech-tools'>
              <span>ReactJs</span>
              <span>NodeJs</span>
              <span>ExpressJs</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>CSS</span>
              <span>PassportJs</span>
              <span>React Spinners</span>
              <span>Passport Google Oauth2</span>
              <span>Cors</span>
              <span>React Router</span>
              <span>React Hooks</span>
              <span>React Toastify</span> 
              <span>Framer Motion</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Axios</span>
              <span>React Loading Skeleton</span>
              <span>Git Bash</span>
              <span>Font Awesome Icons</span>
              <span>Chrome Developer Tools</span>
              <span>56 Coffees</span> <span>Internet</span> & <span>Lots of time.</span>

            </motion.div>
            <br />

            <motion.p initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.27, delay: 0.5 }}>
              The project is open source and you can find the source code on my <a className='link' href='/www.google.com'>GitHub</a> page.
              <br />
              <br />

              If you have any questions or <span className='link' onClick={() => setIsFeedbackPopUpOpen(true)}> suggestions</span>, you can contact me on my <a title='rishirajbhargava00@gmail.com' className='link' href={`mailto:${email}`} target='_blank' rel="noreferrer" >email</a> or on my social media accounts.
              <br />
              <br />
              Thank you for visiting my website!
            </motion.p>




          </div>


        </div>


      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, delay: 0.3 }}


        className='footer-2'>

        <div className='footer-social-media'>
          <ul>
            <li><a href='https://www.instagram.com/rishii_018'><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.github.com/rishirajbhargava/"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/rishirajbhargava/"><i className="fa-brands fa-linkedin"></i></a></li>
          </ul>

        </div>

        <div className='footer-text'>
          <p>dsa-vault © 2023 | All rights reserved.</p>
        </div>



      </motion.div>

      {/* <ThemeButton theme={props.theme} setTheme={props.setTheme} /> */}

    </div>
  )
}

export default AboutPage
