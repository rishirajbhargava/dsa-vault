import React from 'react'
import Skeleton from 'react-loading-skeleton';


function ProfilePageLeftNavSkeleton() {
  return (
    <div className='profile-left-nav'>
                                
                                <ul>
                                    <li>
                                    <Skeleton height={50}/>
                                    </li>
                                    <li>
                                    <Skeleton height={50}/>
                                    </li>
                                    <li>
                                    <Skeleton height={50} />
                                    </li>
                                    <li>
                                    <Skeleton height={50}/>
                                    </li>
                                    <li>
                                    <Skeleton height={50} />
                                    </li>
                                    <li>
                                    <Skeleton height={50} />
                                    </li>
                                  

                                </ul> 
                                </div> 
  )
}

export default ProfilePageLeftNavSkeleton
