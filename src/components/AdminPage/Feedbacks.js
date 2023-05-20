import{ React , useState, useEffect}  from 'react'
import axios from 'axios'
import '../../styles/AdminPage/Feedback.css'


function Feedbacks(props) {

    const [feedbacks, setFeedbacks] = useState([])



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/feedbacks`, { withCredentials: true })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.feedbacks)
                    setFeedbacks(res.data.feedbacks)
                } else {
                    setFeedbacks([])
                }
            })
            .catch(err => {
                console.log(err)
            })
        
    },[])

 

    
  return (
    <div className='general-util'>
    <div>
        <h1>Feedbacks</h1>
        <h2>{props.user.displayName} <span>{props.user.role}</span></h2>
    </div>

    <div className='content'>
        <div className='feedback-container'>
            {feedbacks.map((feedback, index)=>
                <div key={index} className='feedback'>

                    <h3>{feedback.name}</h3>
                    <h4>GoogleID: {feedback.googleId}</h4>
                    <p className='feedback-message'>{feedback.feedback}</p>
                    <p className='date-util'>Date: {new Date(feedback.createdAt).toLocaleString().split(',')[0]}</p>

                </div>

            )} 

       </div>
        
    </div>
  
</div>
  )
}

export default Feedbacks
