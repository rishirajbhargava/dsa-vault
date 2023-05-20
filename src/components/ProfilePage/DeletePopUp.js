import { React, useState } from 'react'
import '../../styles/ProfilePage/DeletePopUp.css'
import userProfile from '../../static/user2.svg'
import axios from 'axios'
import PacmanLoader from "react-spinners/PacmanLoader";
import { motion , AnimatePresence } from 'framer-motion'


function DeletePopUp(props) {

    const [isLoading, setIsLoading] = useState(false);




    function deleteAccount() {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deleteaccount`, { withCredentials: true })
            .then((res) => {
                if (res.data.success) {
                    window.open(`${process.env.REACT_APP_BACKEND_URL}`, '_self');

                } else {
                    setIsLoading(false);
                    console.log('Error deleting account');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

  
    return (
        
        <AnimatePresence>  
              
             { props.deletePopUp && <div 
            className='delete-popup'>
            
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 , transition:{
                duration:0.2
            }}}
            exit={{  scale:0 }}

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
                        <h4>Are you sure <br />you want to delete your account?</h4>
                        <p>
                            This action cannot be undone. This will permanently delete your account and remove all your data from DSA-Vault.
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
                            deleteAccount();
                        }} >
                            Delete
                        </div>
                    </div>


                </motion.div>


            </motion.div>

        </div>}
        
        
        
        </AnimatePresence>
       
    )
}

export default DeletePopUp
