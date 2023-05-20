import { React, useEffect, useState } from 'react'
import '../../styles/ProfilePage/SolvedQuestions.css'
import Solved from './Solved';
import {motion} from 'framer-motion'; 





function SolvedQuestion(props) {

  const [solvedQuestions, setSolvedQuestions] = useState([]);



  useEffect(() => {
    if (props.userData !== null) {
      const solved = props.userData.map((item) => {
        return item.questions.filter((question) => {
          return question.Done;
        })
      })
      
      setSolvedQuestions(solved);
    }
  }, [props.userData]);



  return (

          <motion.div 
         

          className='solved-questions'>
            <motion.h4 
             initial={{
            opacity:0.1,
            x:50
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:0.2,
              delay:0.2
            }}
            
            >Solved Questions ({props.totalQuestionsSolved})</motion.h4>

            {props.totalQuestionsSolved === 0 && <div className='solved-questions-info'>Not started yet.</div>}



            <motion.div 
             initial={{
            opacity:0.1,
            x:50
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:0.2,
              delay:0.2
            }}
            className='solved-questions-container'>


              {solvedQuestions.length !== 0 ? solvedQuestions.map((item,) => {
                return item.map((question , index) => {
                  return <Solved key={question.Problem} question={question} />
                })
              }) : null
              }

            </motion.div>






    </motion.div>
  )
}

export default SolvedQuestion
