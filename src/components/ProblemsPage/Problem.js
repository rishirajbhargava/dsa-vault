import {React, useEffect, useState} from 'react'
import '../../styles/ProblemPage/Problem.css'
import leetcodePng  from '../../static/leetcode.png'
import axios from 'axios';
import {motion } from 'framer-motion';
import NotePopUp from './NotePopUp';



function Problem(props) {



   const [question , setQuestion] = useState(props.question);
   const [isDone, setIsDone] = useState(props.isDone);
   const [isBookmarked, setIsBookmarked] = useState(props.question.Bookmark);
   const [isNoted , setIsNoted] = useState(props.question.Notes==='');
   const [isNotePopUpOpen, setIsNotePopUpOpen] = useState(false);
   const [popUpQuestion, setPopUpQuestion] = useState(props.question);

   
  

   console.log("isnoted  ",isNoted);


    
   useEffect(() => {
   setIsDone(props.isDone);
   }, [props.isDone])

   useEffect(() => {
    setIsBookmarked(props.question.Bookmark);
    }, [props.question.Bookmark])
        const updateDone=()=>{
            axios.put('http://localhost:9000/update-done',{
                question: {...question, Done: !isDone}
        } , {
                    withCredentials: true
        }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }

        const updateBookmark=()=>{
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/update-bookmark`,{
                question: {...question, Bookmark: !isBookmarked}
        } , {
                    withCredentials: true
        }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }

        const  updateTopic=()=>{
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/update`,{
                topicName: question.Topic
        } , {   
                    withCredentials: true
        }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
      


    return (
        <motion.div 
        initial={{opacity:0, x:-30}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.2, delay:props.index*0.07}}
        
        className={props.theme ? `${isDone? 'problem problem-done' :'problem'}` : `${isDone? 'problem problem-dark problem-done':'problem problem-dark'}`}>
            
         <NotePopUp isNotePopUpOpen={isNotePopUpOpen}
         setIsNotePopUpOpen={setIsNotePopUpOpen}  question={popUpQuestion} setPopUpQuestion={setPopUpQuestion}/>
            
            <div className='checkbox-input' >
                <input  
                onClick={ ()=>{
                    updateDone();
                    updateTopic();
                }}

            onChange={ ()=>setIsDone(!isDone)}
            checked={ isDone ? true : false}
               
                className="checkbox-size" name="checkbox" type="checkbox"></input>
            </div>

            <div className='serial-no'>
                    {props.index+1}
            </div>

            <div className='problem-title'>
                <a href={props.question.URL} target="_blank"  rel="noreferrer">{props.question.Problem}</a>
            </div>

            <div className='problem-links'>

                <div>
                        {isNoted ? <i className="fa-regular fa-note-sticky" onClick={()=>{
                            console.log("problem" + props.question);
                                setPopUpQuestion( props.question);
                                setIsNotePopUpOpen(true);
                        }}></i> : <i onClick={()=>{
                            console.log(props.question);
                                setPopUpQuestion(props.question);
                                setIsNotePopUpOpen(true);
                        }} className="fa-solid fa-note-sticky"></i>} 
   
                </div>
               
               
               
               
                <div>
                { isBookmarked ? <i className="fa-solid fa-bookmark" onClick={()=>
                {
                setIsBookmarked(!isBookmarked);
                updateBookmark();
                }}
                ></i> :<i className="fa-regular fa-bookmark" onClick={()=>{
                setIsBookmarked(!isBookmarked);
                updateBookmark();
                }}></i> }
                </div>


                <div>
                    <a href={props.question.URL}  target="_blank"  rel="noreferrer" >
                    <span><svg x="0px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 48 48">
                        <path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"></path>
                    </svg> </span>
                    </a>
                </div>


                <div>
                <a href={props.question.URL2} target="_blank"  rel="noreferrer" >
                    <span> <img src={leetcodePng} alt="leetcode png"/></span>
                    </a>
                </div>


            </div>


        </motion.div>
    )
}

export default Problem