import React from 'react'

const Assignment = ({data}) => {
    const typeVariants={
        'event':'bg-orange-200 text-red-500',
        "holiday":'bg-blue-100 text-blue-400'
    }
  return (
    <div className='border-b border-text-neutral py-4 space-y-2'>
        <div className='flex items-center justify-between'>
            <h1 className={`${typeVariants[data.type]} uppercase text-xs px-2 rounded ml-2 font-bold`}>{data.type}</h1>
            <p className='text-text-neutral text-sm font-semibold'>{data.date}</p>
        </div>

        <h1 className='text-text-primary font-bold'>{data.title}</h1>
        <p className='text-sm text-text-neutral font-semibold'>{data.description}</p>
    </div>
  )
}

export default Assignment