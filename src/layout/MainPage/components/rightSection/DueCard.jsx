import React from 'react'

const DueCard = () => {
    return (
        <div className='bg-red-300 p-6 w-full h-fit rounded-md text-secondary space-y-8'>
            <h1 className='uppercase text-xl font-semibold'>
                Due Today
            </h1>
            <div>

                <p className='capitalize font-medium text-lg'>Assignment 1</p>

                <p className=' text-secondary/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <button className='text-sm uppercase py-2 px-4 w-36 rounded bg-secondary text-primary font-bold'>View</button>
        </div>
    )
}

export default DueCard