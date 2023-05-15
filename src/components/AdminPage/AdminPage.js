import React from 'react'
import '../../styles/AdminPage/AdminPage.css'
import Header from '../HomePage/Header'

function AdminPage(props) {
  return (
    <div className='admin-page'>
      <Header theme={props.theme}/>
      <div className='admin-container'>

        <h1>Admin dashboard!</h1>
        <p>Work in progress</p>

      </div>


    </div>
  )
}

export default AdminPage
