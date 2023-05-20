import React from 'react'

function AddQuestion(props) {
  return (
    <div className='general-util'>
    <div>
        <h1>Add Question</h1>
        <h2>{props.user.displayName} <span>{props.user.role}</span></h2>
    </div>

    <div className='content'>
        add question info
    </div>
  
</div>
  )
}

export default AddQuestion
