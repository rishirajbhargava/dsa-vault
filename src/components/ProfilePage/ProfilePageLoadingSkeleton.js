import React from 'react'
import Skeleton from 'react-loading-skeleton'
import '../../styles/ProfilePage/Skeleton.css'

function ProfilePageLoadingSkeleton(props) {
  return (
    <div className='profile-right' >
      <div className='user-info'>
      <div className='user-info-left '>
          <Skeleton circle={true} height={80} width={80} className="margin-profile-page-util" />
          <Skeleton  height={30} width={130} />
          
      </div>

        <div className='user-info-right'>

          <div className='user-info-right-boxes'>
              <Skeleton height={100} width={160} />
          </div>

          <div className='user-info-right-boxes'>
          <Skeleton height={100} width={160} />
          </div>
         

        </div>

      </div>




      <div className='user-statics user-stactics-overflow-util'>

        <div className='solved-questions'>
          <Skeleton height={50} className='user-statics-skeleton' />
          <Skeleton height={50} className='user-statics-skeleton' />
          <Skeleton height={50} className='user-statics-skeleton' />
          <Skeleton height={50} className='user-statics-skeleton' />
          <Skeleton height={50} className='user-statics-skeleton' />
          <Skeleton height={50} className='user-statics-skeleton'/>
          
          
        </div>


      </div>

    </div>
  )
}

export default ProfilePageLoadingSkeleton
