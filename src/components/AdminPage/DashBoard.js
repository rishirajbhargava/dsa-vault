import React from 'react'
import '../../styles/AdminPage/Dashboard.css'

function DashBoard(props) {
  return (
    <div className='general-util'>
    <div>
        <h1>Dashboard</h1>
        <h2>{props.user.displayName} <span>{props.user.role}</span></h2>
    </div>

    <div className='content'>
    Dashboard info
    </div>
  
</div>
  )
}

export default DashBoard
