import{ React , useState, useEffect}  from 'react'
import '../../styles/AdminPage/AdminPage.css'
import Header from '../HomePage/Header'
import axios from 'axios'
import DashBoard from './DashBoard' 
import Users from './Users'
import Feedbacks from './Feedbacks'
import AddQuestion from './AddQuestion'
import DeleteQuestion from './DeleteQuestion'
import PulseLoader from "react-spinners/PulseLoader";

function AdminPage(props) {
  const [user, setUser] = useState(null)
  const [tab , setTab] = useState('users')
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuser`, { withCredentials: true })
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user);
          setIsLoading(false);
        } else {
       
          setUser(null);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      })

  }, []);


 

  return (
  
       <div className='profile-page'>
             <Header theme={props.theme} />
            {isLoading ? <div className='profile-container'><PulseLoader color='#0E8388' size={12}/></div> 
            :<>
             {user!==null && user.role==='admin' ? <div className='profile-container'>


                <div className='profile-content'>

                          <div className='profile-left'>
                          <div className='profile-left-nav'>
                                <ul>
                                <li   className={activeTab === 'dashboard' ? 'liAsA active-profile-link' : 'liAsA'}
                                  onClick={() => {
                                    setTab('dashboard')
                                    setActiveTab('dashboard')}}
                                
    
                                ><i className="fa-solid fa-chart-line"></i>Dashboard</li>
                                <li   className={activeTab === 'users' ? 'liAsA active-profile-link' : 'liAsA'}
                                   onClick={() => {
                                    setTab('users')
                                    setActiveTab('users')}}
                                
                                ><i className="fa-solid fa-users"></i>Users</li>
                                <li   className={activeTab === 'feedbacks' ? 'liAsA active-profile-link' : 'liAsA'}
                                  onClick={() => {
                                    setTab('feedbacks')
                                    setActiveTab('feedbacks')}}
                                
                                ><i className="fa-solid fa-message"></i>Feedbacks</li>
                                <li   className={activeTab === 'addquestion' ? 'liAsA active-profile-link' : 'liAsA'}
                                   onClick={() => {
                                    setTab('addquestion')
                                    setActiveTab('addquestion')}}
                                ><i className="fa-solid fa-circle-plus"></i>Add Question</li>
                                <li  className={activeTab === 'deletequestion' ? 'liAsA active-profile-link' : 'liAsA'}
                                   onClick={() => {
                                    setTab('deletequestion')
                                    setActiveTab('deletequestion')}}
                                
                                ><i className="fa-solid fa-trash"></i>Delete Question</li>
                                <li className='liAsA'> <i className="fa-solid fa-gear"></i>Settings</li>
                                <li className='liAsA'><i className="fa-solid fa-right-from-bracket"></i>Logout</li>
                              </ul>
                              </div>

                          </div>

                          <div className='profile-right'> 
                            <div className='admin-right-content'>

                             {tab==='dashboard' && <DashBoard  user={user}/>}
                             {tab==='users' && <Users user={user} />}
                             {tab==='feedbacks' && <Feedbacks  user={user}/>}
                             {tab==='addquestion' && <AddQuestion user={user} />} 
                             {tab==='deletequestion' && <DeleteQuestion  user={user}/>} 
                             {tab==='settings' && <DashBoard  user={user}/>} 
                              
                            </div>





                          </div>


                </div>

              </div> : <div className='profile-container'>
                      <div className='not-authorized'>
                          <h2>401 Unauthorized!</h2>
                          <p>You are not authorized to view this page.</p>
                          <p>Only <span className='link'>Admins</span> can view this page.</p>
                          
                          <p className='go-back'>Go back to </p>
                         <div className='btns'><a href='/login'><i className='fa-solid fa-user-secret'></i>Login as Admin</a>
                          <a href='/'><i className='fa-solid fa-house'></i>Home</a></div> 
                      </div>
                 


              </div>}
              </>}


        </div>
  )
}

export default AdminPage
