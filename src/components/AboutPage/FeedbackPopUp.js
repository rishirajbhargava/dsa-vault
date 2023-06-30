
import React, { useEffect } from 'react'
import '../../styles/AboutPage/FeedbackPopUp.css'  
import {motion } from 'framer-motion'
import axios from 'axios'

function FeedbackPopUp(props) {
const [feedback, setFeedback] = React.useState('');
const [isSendingFeedback, setIsSendingFeedback] = React.useState(false);
const [isFeedbackSubmitted, setIsFeedbackSubmitted] = React.useState(false);

function allowScroll() {
    document.body.style.overflow = 'unset';
  }

function submitFeedback(){
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/feedbacks`, {feedback: feedback}, {withCredentials:true})
    .then((res)=>{
        if(res.data.success){
            setIsSendingFeedback(false);
            setIsFeedbackSubmitted(true);
            console.log('Feedback submitted');
        }else{
            setIsSendingFeedback(false);
            setIsFeedbackSubmitted(false);
            console.log('Error submitting feedback');
        }
    })
    .catch((err)=>{
        setIsSendingFeedback(false);
        setIsFeedbackSubmitted(false);
        console.log(err);
    })

}

function handleChange(e){
    setFeedback(e.target.value);
}

return (
    <motion.div initial={{ opacity:0}}
    animate={{ opacity:1}}
    transition={{duration:0.27}} className='feedback-backdrop'>
            <motion.div 

            initial={{scale: 0, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{duration:0.27}}

            
            
            className='feedback-popup'>

                <div className='close-btn' onClick={()=>{
                    allowScroll();
                    props.setIsFeedbackPopUpOpen(false)}}> <i className='fa-solid fa-xmark'></i></div>
                <h1>Feedback | Dsa-vault  <i class="fa-solid fa-message"></i></h1>
                {  props.user===null? null: <p className='username-info-feedback'>Submitting feedback as <span>{props.user.displayName} </span> </p>}
                <textarea value={feedback} onChange={handleChange}></textarea>

                {props.user===null ? <div className='warning-login'>Please <a className='link' href='/login'>login</a> first to give feedback.</div>:null}
              
                <div>
                    <div className='button-1'   onClick={()=>{
                    allowScroll();
                    props.setIsFeedbackPopUpOpen(false)
                }}>     Cancel
                    </div>
              {props.user===null?<div className='button btn-2'>Submit</div>  : <div onClick={()=>{
                submitFeedback();
                setIsSendingFeedback(true);
                                     
              }} className='button'>Submit{isFeedbackSubmitted ? <span>ted<i className="fa-sharp fa-solid fa-circle-check"></i></span>: null }</div> }
                </div>
                

            </motion.div>
            

</motion.div>
  )
}

export default FeedbackPopUp
