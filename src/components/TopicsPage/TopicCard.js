import {React, useEffect, useState} from 'react'
import '../../styles/TopicPage/TopicCard.css'
import Progress from 'react-progressbar';
import {motion} from 'framer-motion';


import '../../styles/TopicPage/ProgressBar.css'
 
function TopicCard(props) {
    
  const [solved, setSolved] = useState(0);
  const totalQuestions = props.topic.questions.length;
  

  useEffect(() => {
    const solved = props.topic.questions.filter(question => question.Done);
    setSolved(solved.length);
    }, [])

  
    return (

    
            
            <motion.a 
            
            initial={{opacity:0 , x:-50}}
            animate={{opacity:1 , x:0}}
            transition={{duration:0.2, delay:0.1*props.index}}

             className='main-card' href= {"/topics/" + props.topic.topicUrl} >
             
            <div className={props.theme?'topic-card':'topic-card dark-2'}>

            <h3>{props.topic.topicName}</h3>
            <p className='margin-util card-para'>No. of Questions : {totalQuestions} </p>
            
            {
                props.topic.started? 
                <>
                <p  className='card-para'>{totalQuestions-solved} more to go</p> 
                <p className='btn-margin'>{((solved /totalQuestions)*100).toFixed(1)}% Done</p>
                
                <div className='progress-background'><Progress completed={((solved /totalQuestions)*100).toFixed(1)} className='progress-bar' 
                background-color='#fff'
                color='#198673'/></div>
                
                </>
                
                : <>
                    <p className='card-para'>Not Started yet.</p> 
                    <p className='card-para btn-look'>Start Now</p>
                </>
            }
            
             </div>
        </motion.a>
    )
}

export default TopicCard
