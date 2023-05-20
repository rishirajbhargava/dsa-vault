import{ React , useState, useEffect}  from 'react'
import axios from 'axios'

function Users(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/users`, { withCredentials: true })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.users)
                    setUsers(res.data.users)
                } else {
                    setUsers([])
                }
            })
            .catch(err => {
                console.log(err)
            })},[])

  return (
    <div className='general-util'>
    <div>
        <h1>Users</h1>
        <h2>{props.user.displayName} <span>{props.user.role}</span></h2>
    </div>

    <div className='content'>
        <div className='feedback-container'>

            {users.map((user, index)=>
                <div key={index} className='feedback'>
                        <h3>{user.displayName}</h3>
                        <h4>GoogleID: {user.googleId} ({user.role})</h4>
                        <p className='feedback-message'>{user.photo}</p>
                        <p className='date-util'>Date: {new Date(user.createdAt).toLocaleString().split(',')[0]}</p>
                        
                 </div>)}


        </div>


        
    </div>
  
</div>
  )
}

export default Users
