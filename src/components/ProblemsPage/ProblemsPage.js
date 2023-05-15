import React, { useEffect, useState } from 'react'
import Header from '../HomePage/Header'
import Problem from './Problem'
import '../../styles/ProblemPage/ProblemsPage.css'
import axios from 'axios';
import originalData from '../../data.js'
import Skeleton from 'react-loading-skeleton';
import ProblemLoadingSkeleton from './ProblemLoadingSkeleton';

function ProblemsPage(props) {

  const [topic, setTopic] = useState(originalData[props.position]);
  const [solvedQuestions, setSolvedQuestions] = useState(topic.doneQuestions);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 
  const loader = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  useEffect(() => {
   
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/userdata/${props.position}`, {
      withCredentials: true
    }).then(res => {
      if (res.data.success) {   
        setUser(res.data.user);
        setTopic(res.data.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log('Please Login to continue!');
      }
    }).catch(err => {
      setIsLoading(false);
      console.log(err);
    })
  }, [])

  useEffect(() => {
      const solved = topic.questions.filter(question => question.Done);
      setSolvedQuestions(solved.length);
  },[topic])


  const totalQuestions = topic.questions.length;


  return (
    <div className='back-page'>
    
      
      
      <Header theme={props.theme} />
      <div className={props.theme ? 'problems-page-container' : 'problems-page-container prblm-pg-dark'}>
        <div className={props.theme ? 'header-text' : 'header-text header-text-dark'}>

          <h3>{topic.topicName}</h3>
          <p>Total Questions : {totalQuestions}</p>
           { user===null ?null:  <p>Done : {solvedQuestions}/{totalQuestions}</p>}
          
          {isLoading ?  <Skeleton width={350} height={25}/> : <div>
                    { user===null ? <div className='warning-divs warning-divs-problem-page' > <p>Please <a href='/login'>Login</a> to track your record! </p> </div> :null}
                    </div>
                     }
        </div>
        <div className={props.theme ? 'problems-container' : 'problems-container prblm-cnt-dark'}>

         
          {isLoading ? loader.map((topic, index) => <ProblemLoadingSkeleton key={index} theme={props.theme}/>)
          :
          <>
          <div className={props.theme ? 'problem prob-heading checkbox-util' : 'problem prob-heading checkbox-util problem-dark'}>
            <div className='checkbox-input'>
            <i className="fa-solid fa-square-check"></i>
            </div>
            <div className='serial-no prob-heading'>
              id
            </div>

            <div className='problem-title prob-heading question-heading-util'>
              <p>Question</p>
            </div>
            <div className='problem-links prob-heading'>
            <div>  <i className="fa-solid fa-note-sticky"></i></div>
            <div><i className="fa-solid fa-bookmark"></i> </div>
            <div> <i className="fa-solid fa-link"></i> </div>
            <div> <i className="fa-solid fa-link"></i></div>
              
              
                
            </div>
          </div>
          {topic.questions.map((question, index) => <Problem 
          isDone={question.Done? true :false} 
          position ={props.position}
          key={index} 
          question={question} 
          index={index} 
          theme={props.theme}
           />
           ) }
           </>
          } 
        </div>
      </div>
      {/* <ThemeButton theme={props.theme} setTheme={props.setTheme} /> */}


    </div>
  )
}

export default ProblemsPage
