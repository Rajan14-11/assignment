import React from 'react'
import DataCard from './DataCard'

const MyData = ({setShowAllStudents}) => {
  return (
    <div className='bg-secondary rounded-md w-full  shadow-md p-4 space-y-6'>
        <DataCard title={'My Students'} setShowAllStudents={setShowAllStudents} />
        <DataCard title={'My Watchlist'}/>
    </div>
  )
}

export default MyData