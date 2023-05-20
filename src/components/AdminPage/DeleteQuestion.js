import React from 'react'

function DeleteQuestion(props) {
  return (
    <div className='general-util'>
    <div>
        <h1>Delete Question</h1>
        <h2>{props.user.displayName} <span>{props.user.role}</span></h2>
    </div>

    <div className='content'>
        delete question info
    </div>
  
</div>
  )
}

export default DeleteQuestion
