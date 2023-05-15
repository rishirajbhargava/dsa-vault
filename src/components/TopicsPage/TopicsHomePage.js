import axios from 'axios';
import React, { useEffect } from 'react'
import TopicCard from './TopicCard'
import originalData from '../../data.js'
import '../../styles/TopicPage/Topics.css'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from './LoadingSkeleton';
import Skeleton from 'react-loading-skeleton';
import {motion} from 'framer-motion';


function TopicsHomePage(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState(originalData);
    const [solvedQuestions, setSolvedQuestions] = React.useState(0);
    const [user, setUser] = React.useState(null);
   

   


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/userdata`, {
            withCredentials: true
        }).then(res => {
            if (res.data.success) {
                setIsLoading(false);
                setData(res.data.data);
            } else {
                setIsLoading(false);
                console.log('Please Login to continue!');
            }
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        }
        )
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/login/success`, { withCredentials: true })
            .then(res => {
                if (res.data.success) {
                    setUser(res.data.user);
                } else {
                    setUser(null);
                }
            })
    }, []);

    useEffect(() => {
        const solved = data.reduce((acc, topic) => acc + topic.questions.filter(question => question.Done).length, 0);
        setSolvedQuestions(solved);
    }, [data, user])








    const totalQuestions = data.reduce((acc, topic) => acc + topic.questions.length, 0);




    return (
        <>
            <div className={props.theme ? 'question-page-container' : 'question-page-container-dark'}>

                <div
                
                className={props.theme ? 'question-page-header' : 'question-page-header-dark'}>
                    <h3>Topic Wise <span className='topic-page-heading'>DSA</span> Problems</h3>

                    {isLoading ? <Skeleton width={350} height={25} /> : <p className='user-info-topic-page'>Hey <span>{user === null ? 'Guest' : user.displayName}! </span></p>}

                    {isLoading ? <Skeleton width={350} height={25} />
                        : <>

                            <p>Total Questions : <span className={props.theme ? 'util-color-1-light' : 'util-color-1-dark'}>{totalQuestions}</span></p>
                          { user && <p>Solved Questions : <span className={props.theme ? 'util-color-1-light' : 'util-color-1-dark'}>{solvedQuestions} ({((solvedQuestions / totalQuestions) * 100).toFixed(2)} %)</span></p>}

                        </>}




                    {isLoading ? <Skeleton width={350} height={25} /> : <div>
                        {user === null ? <div className='warning-divs' > <p>Please <a href='/login'>Login</a> to track your record! </p> </div> : null}
                    </div>
                    }


                </div>

                <motion.div 

                className='questions-cards'>
                    {isLoading ? originalData.map((topic, index) => <LoadingSkeleton key={index} theme={props.theme} />)
                        :
                        data.map((topic,index) =>  <TopicCard key={topic.position} topic={topic} theme={props.theme} index={index} /> )
                    }

                </motion.div>


            </div>

            {/* <ThemeButton theme={props.theme} setTheme={props.setTheme} /> */}

        </>
    )
}

export default TopicsHomePage
