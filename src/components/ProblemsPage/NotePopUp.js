import React from 'react'
import '../../styles/ProblemPage/NotePopUp.css'
import axios from 'axios';


function NotePopUp({ question, setIsNotePopUpOpen, isNotePopUpOpen }) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [note, setNote] = React.useState(question.Notes);
    const [isNoted, setIsNoted] = React.useState(false);
    


    function updateNote() {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/update-note`, {
            question: { ...question, Notes: note }
        }, {
            withCredentials: true
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        console.log("notepop");
        if (question.Notes === '') {
            setNote('Add a note here...');
        } else {
            setNote(question.Notes);
        }
    }, [])


    return (
        <div className={isNotePopUpOpen ? 'notes-popup-backdrop' : "notes-popup-backdrop note-pop-close"}>
            <div


                className={!isNotePopUpOpen ? 'notes-popup-container' : "notes-popup-container note-pop-transition"}>

                <div

                    className='note-popup-content'>

                    <span onClick={() => {
                        setIsNotePopUpOpen(false);
                        setIsEditing(false);
                    }} className='close-btn'> <i className='fa-solid fa-xmark'></i></span>
                    <h3>Notes <i className="fa-solid fa-clipboard"></i></h3>




                    {!isEditing ?

                        <div className={  isEditing? 'text-content' : 'text-content scroll-util'}>
                            <span className={!isNotePopUpOpen ? 'note-text-hidden' : "note-text"} onClick={() => {
                                setIsEditing(true);
                            }} >{note}</span>
                        </div>
                        : <div className='text-content'>
                            <textarea value={note}
                                onChange={(e) => { 
                                    if (e.target.value === 'Add a note here...') {
                                        setNote('');
                                    } else {
                                        setNote(e.target.value);
                                    }
                                }} ></textarea>
                        </div>}
                </div>

                {!isEditing ? <div className='delete-profile-buttons notes-popup-btns'>

                    <div onClick={
                        () => {
                            setIsNotePopUpOpen(false);
                            setIsEditing(false);
                        }
                    }>
                        Go Back
                    </div>

                    {!isNoted ? <div onClick={
                        () => {
                            setIsEditing(true);
                        }
                    }>
                        Edit
                    </div> : <div onClick={
                        () => {
                            setIsEditing(true);
                        }
                    }>
                        Edit Again
                    </div>}

                    {isNoted &&
                        <i className="fa-sharp fa-solid fa-circle-check"></i>}
                </div>
                    :

                    <div className='delete-profile-buttons notes-popup-btns'>
                        <div onClick={
                            () => {

                                setIsEditing(false);
                            }
                        }>
                            Cancel
                        </div>

                        <div onClick={() => {
                            updateNote();
                            setIsNoted(true);
                            setIsEditing(false);

                        }}>
                            Submit
                        </div>

                    </div>

                }


            </div>
     
       </div >
  )
}

export default NotePopUp
