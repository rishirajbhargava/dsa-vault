import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../HomePage/Header'
import '../../styles/ProfilePage/ProfilePage.css'
import { Navigate } from 'react-router-dom';
import userProfile from '../../static/user2.svg'
import SolvedQuestion from './SolvedQuestion';
import SavedQuestions from './SavedQuestions';
import ProfilePageLoadingSkeleton from './ProfilePageLoadingSkeleton';
import DeletePopUp from './DeletePopUp';
import ResetPopUp from './ResetPopUp';
import LogOutPop from './LogOutPop';
import { motion } from 'framer-motion';
import ProfilePageLeftNavSkeleton from './ProfilePageLeftNavSkeleton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProfilePage(props) {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [totalQuestionsSolved, setTotalQuestionsSolved] = useState(0);
    const [savedQuestions, setSavedQuestions] = useState(0);
    const [solvedTab, setSolvedTab] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [resetPopUp, setResetPopUp] = useState(false);
    const [logOutPopUp, setLogOutPopUp] = useState(false);


    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile`, { withCredentials: true })
            .then((res) => {
                if (res.data.success) {
                    setError(false);
                    setIsLoading(false);
                    setUserData(res.data.data);
                    setUser(res.data.user)
                } else {
                    setError(true);
                    setIsLoading(false);
                }

            })
            .catch(err => {
                setIsLoading(false);
                setError(true);
                console.log(err);
            })

    }, []);

    useEffect(() => {
        if (userData !== null) {
            let count = 0;
            userData.forEach((item) => {
                item.questions.forEach((question) => {
                    if (question.Done) {
                        count++;
                    }
                })
            }
            )
            setTotalQuestionsSolved(count);
        }
    }, [userData])

    useEffect(() => {
        if (userData !== null) {
            let count = 0;
            userData.forEach((item) => {
                item.questions.forEach((question) => {
                    if (question.Bookmark) {
                        count++;
                    }
                })
            }
            )
            setSavedQuestions(count);
        }
    }, [userData])

    return (
        <>
            {error ? <Navigate to="/login" error={error} /> :
                <div className='profile-page'>

                    {deletePopUp ? <DeletePopUp user={user} setActiveTab={setActiveTab} setDeletePopUp={setDeletePopUp} deletePopUp={deletePopUp} /> : null}
                    {resetPopUp ? <ResetPopUp user={user} setActiveTab={setActiveTab} setDeletePopUp={setResetPopUp} deletePopUp={resetPopUp} /> : null}
                    {logOutPopUp ? <LogOutPop user={user} setActiveTab={setActiveTab} setDeletePopUp={setLogOutPopUp} deletePopUp={logOutPopUp} /> : null}
                
                    <Header theme={props.theme} page={props.page} />

                    <div className='profile-container'>

                        <div className='profile-content'>

                            <div className='profile-left'>

                                {isLoading ?
                                    <ProfilePageLeftNavSkeleton /> :


                                    <div className='profile-left-nav'>
                                        <ul>
                                            <motion.li

                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                }}

                                                className={activeTab === 0 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => setActiveTab(0)}
                                            >
                                                <i className="fa-solid fa-user"></i> Profile </motion.li>


                                            <motion.li
                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.1,
                                                }}


                                                className={activeTab === 2 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => {
                                                    setSolvedTab(true);
                                                    setActiveTab(2);
                                                }} >
                                                <i className="fa-solid fa-circle-check"></i>Solved Questions</motion.li>

                                            <motion.li
                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.15,
                                                }}


                                                className={activeTab === 1 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => {
                                                    setSolvedTab(false);
                                                    setActiveTab(1);
                                                }}>
                                                <i className="fa-solid fa-bookmark"></i>Saved Questions</motion.li>


                                            <motion.li


                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.20,
                                                }}




                                                className={activeTab === 3 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => {
                                                    setResetPopUp(true);

                                                    setActiveTab(3)
                                                }}>
                                                <i className="fa-solid fa-rotate-left"></i>Reset Progress</motion.li>


                                            {/* <motion.li

                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.25,
                                                }}



                                                className={activeTab === 4 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => setActiveTab(4)}>
                                                <i className="fa-solid fa-pen-to-square"></i>Edit Profile</motion.li> */}


                                            <motion.li

                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.3,
                                                }}



                                                className={activeTab === 5 ? 'liAsA active-profile-link' : 'liAsA'}
                                                onClick={() => {

                                                    setDeletePopUp(true);

                                                    setActiveTab(5)
                                                }}>
                                                <i className="fa-solid fa-trash"></i>Delete Account</motion.li>


                                            <motion.li

                                                initial={{
                                                    opacity: 0,
                                                    y: -40
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.35,
                                                }}

                                                className='liAsA'
                                                onClick={() => {
                                                    setLogOutPopUp(true);
                                                }}>
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Log Out <br />
                                                {user === null ? <span className='logout-userName'>UserName</span> : <span className='logout-userName'>{user.displayName}</span>}
                                            </motion.li>
                                        </ul>
                                    </div>}


                            </div>
                            {isLoading ? <ProfilePageLoadingSkeleton /> 
                            :
                             <div className='profile-right'>

                                <div className='user-info'>

                                    <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: -40
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    
                                     className='user-info-left'>
                                        <img src={user === null ? userProfile : user.photo} alt="profile" />
                                        {user === null ? <h3>UserName</h3> : <h3>{user.displayName}</h3>}
                                        <p>(IIT BHU)</p>
                                    </motion.div>

                                    <div className='user-info-right'>

                                        <motion.div 
                                        
                                                
                                            initial={{
                                                opacity: 0,
                                                x: 50
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay:0.3
                                            }}
                                        
                                        className='user-info-right-boxes'>
                                            <div>
                                                <h3>Overall Coding<br />
                                                    Score</h3>
                                                <h2>{Math.trunc(totalQuestionsSolved * 5.5)}</h2>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-ranking-star"></i>
                                            </div>

                                        </motion.div>
                                        <motion.div
                                        
                                        initial={{
                                                opacity: 0,
                                                x: 50
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay:0.3
                                            }}
                                         className='user-info-right-boxes'>
                                            <div>
                                                <h3>Total Questions <br />
                                                    Solved</h3>
                                                <h2>{totalQuestionsSolved}/{448}</h2>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle-check"></i>
                                            </div>

                                        </motion.div>
                                        {/* <div className='user-info-right-boxes'>
                                            <div>
                                                <h3>Total Questions <br />
                                                    Solved</h3>
                                                <h2>10/545</h2>

                                            </div>
                                            <div>
                                                <i className="fa-solid fa-code"></i>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>



                                <div className='user-statics'>

                                    {solvedTab ? <SolvedQuestion
                                        userData={userData}
                                        totalQuestionsSolved={totalQuestionsSolved} />
                                        :
                                        <SavedQuestions
                                            userData={userData}
                                            savedQuestions={savedQuestions}
                                        />
                                    }




                                </div>


                            </div>}
                            <ToastContainer />


                        </div>

                    </div>


                </div>
            }

        </>
    )
}

export default ProfilePage
