import { React, useState } from 'react'
import '../../styles/ProfilePage/DeletePopUp.css'
import userProfile from '../../static/user2.svg'
import axios from 'axios'
import PacmanLoader from "react-spinners/PacmanLoader";
import { motion, AnimatePresence } from 'framer-motion'



function ResetPopUp(props) {

    const [isLoading, setIsLoading] = useState(false);

    function resetProgress() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/resetprogress`, {
            withCredentials: true
        }).then(res => {
            if (res.data.success) {
                window.open(`${process.env.REACT_APP_FRONTEND_URL}/profile`, '_self');
            } else {
                console.log(res.data.message);
            }

        }).catch(err => {
            console.log(err);
        })
    }


    return (


       <AnimatePresence>  
              
             { props.deletePopUp && <div className='delete-popup'>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{
                opacity: 1, scale: 1, transition: {
                    duration: 0.2
                }
            }}
                exit={{ scale: 0 }}

                className='delete-popup-container'>

                {isLoading ? <motion.div className='deleting'>
                    <motion.div className='deleting-text'>
                        <PacmanLoader
                            color="#505050"
                            loading
                            size={15}
                            speedMultiplier={1}
                        />
                    </motion.div>
                </motion.div> : null}

                <div className='delete-profile-close-button' onClick={() => {
                    props.setDeletePopUp(false);
                    props.setActiveTab(0);
                }}><i className="fa-regular fa-circle-xmark"></i></div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: 1, x: 0, transition: {
                            delay: 0.2,
                            duration: 0.2,
                        }
                    }}
                    exit={{ opacity: 0, x: 100 }}

                    className='pop-up-content'>




                    <div className='delete-profile-info'>

                        <img src={props.user === null ? userProfile : props.user.photo} alt="user-profile" />
                        {props.user === null ? <h3>UserName</h3> : <h3>{props.user.displayName}</h3>}
                    </div>
                    <div className='delete-profile-warning-text'>
                        <h4>Reset your progress?</h4>
                        <p>
                            This action cannot be undone. This will permanently remove all your progress.
                        </p>
                    </div>
                    <div className='delete-profile-buttons'>
                        <div onClick={() => {
                            props.setDeletePopUp(false);
                            props.setActiveTab(0);
                        }} >
                            Cancel
                        </div>
                        <div onClick={() => {
                            setIsLoading(true);
                            resetProgress();
                        }} >
                            Reset
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>}
         </AnimatePresence>
    )
}

export default ResetPopUp
