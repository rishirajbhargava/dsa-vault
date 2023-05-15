import React from 'react'
import '../../styles/TopicPage/Topics.css'
import Header from '../HomePage/Header'
import TopicsHomePage from './TopicsHomePage'


function Topics(props) {
    return (
        <div className='q-page'>
            <Header theme={props.theme} setTheme={props.setTheme}  page={props.page} />
            <TopicsHomePage theme={props.theme} setTheme={props.setTheme} />
        </div>
    )
}

export default Topics
