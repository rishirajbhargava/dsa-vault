import React from 'react'
import Skeleton from 'react-loading-skeleton'


function ProblemLoadingSkeleton() {
  return (
    <div className='problem-loading-skeleton'>
        <Skeleton height={50} />
    </div>
  )
}

export default ProblemLoadingSkeleton
