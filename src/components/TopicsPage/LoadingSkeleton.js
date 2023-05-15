import {React } from 'react'
import '../../styles/TopicPage/TopicCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
 
function LoadingSkeleton(props) {
    

    return (


            <SkeletonTheme highlightColor='#d0e8e3'>
            <div className='main-card'> 
            <div className={props.theme?'topic-card':'topic-card dark-2'}>

            <h3><Skeleton width={120}/></h3>
            <p className='margin-util card-para'><Skeleton height={18} /> </p>
            <p className='btn-margin'><Skeleton height={18} /> </p>
            <p><Skeleton width={100} height={26}  /></p>
 
             </div>
            </div>
            </SkeletonTheme>
    )
}

export default LoadingSkeleton
