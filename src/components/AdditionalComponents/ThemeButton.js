import React from 'react'
import '../../styles/Additional/ThemeButton.css'



function ThemeButton({theme, setTheme}) {

    function handleChange() {
    setTheme(!theme); 
    }
  return (
    <div className={theme ? 'theme-btn' : 'theme-btn-dark'} onClick={handleChange}  >

    {theme ? <i className="fa-solid fa-moon"></i> : <i  className="fa-solid fa-sun"></i>}

  </div>
  )
}

export default ThemeButton
