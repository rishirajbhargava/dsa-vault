import {React , useState, useEffect} from 'react'
import Solved from './Solved';
import '../../styles/ProfilePage/SolvedQuestions.css'
import {motion} from 'framer-motion';

function SavedQuestions(props) {
  
  const [savedQuestions, setSavedQuestions] = useState([]);  

  useEffect(() => {
    if (props.userData !== null) {
      const saved = props.userData.map((item) => {
        return item.questions.filter((question) => {
          return question.Bookmark;
        })
      })
      
      setSavedQuestions(saved);
    }
  }, [props.userData]);

  

  return ( 
    <div className='solved-questions'>
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
        
        
        
        >Saved Questions ({props.savedQuestions})</motion.h4>

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
            }} className='solved-questions-container'>

        {props.savedQuestions===0 && <div className='solved-questions-info'>No Saved Questions</div>}

        {savedQuestions.length !== 0 ? savedQuestions.map((item) => {
                return item.map((question) => {
                  return <Solved key={question.Problem} question={question} />
                })
              }) : <h4>No Questions Solved</h4>
              }


      

              

        </motion.div>
      
    </div>
  )
}

export default SavedQuestions
