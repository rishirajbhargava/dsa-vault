import React  from 'react'
import userProfile from '../../static/user2.svg'
import '../../styles/ProfilePage/LogOutPop.css'
import { motion } from 'framer-motion'

function LogOutPop(props) {
    

    function logOut(){
        window.open(`${process.env.REACT_APP_BACKEND_URL}/logout`, '_self');
    }


    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{
            duration:0.2
        }}} className='delete-popup'>

        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 , transition:{
                duration:0.2
            }}}
            exit={{  scale:0 }}className='delete-popup-container'>

        <div className='delete-profile-close-button' onClick={() => {
                     
                     props.setDeletePopUp(false);
                    props.setActiveTab(0);
                }}><i className="fa-regular fa-circle-xmark"></i></div>


                <motion.div 
                initial={{ opacity:0, x:50}}
                animate={{ opacity:1, x:0 , transition:{
                    delay:0.2,
                    duration:0.2,
                }}}
                exit={{ opacity:0, x:50 }}
                
                className='pop-up-content'>


            



                <div className='delete-profile-info'>

                    <img src={props.user === null ? userProfile : props.user.photo} alt="user-profile" />
                    {props.user === null ? <h3>UserName</h3> : <h3>{props.user.displayName}</h3>}

                </div>
                <div className='delete-profile-warning-text'>
                    <h4>Are you sure <br />you want to Logout?</h4>
                    <p> You will not be able to track your progress after logout.</p>
                </div>


                <div className='delete-profile-buttons'>
                        <div onClick={() => {
                             props.setDeletePopUp(false);
                             props.setActiveTab(0);
                        }} >
                            Cancel
                        </div>
                        <div onClick={() => {
                            logOut();
                        }} >
                            Logout
                        </div>
                    </div>



            </motion.div>

        </motion.div>
        </motion.div>
    )
}

export default LogOutPop
