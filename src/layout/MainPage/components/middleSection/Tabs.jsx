import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";

const TabsArray = [
    {
        title: 'Overall Summary',

        active: false
    },
    {
        title: 'Guided Path progress',

        active: true
    },
    {
        title: 'Assignment Progress',

        active: false
    },
]

const Tabs = () => {
    return (
        <div className='grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-3'>
            {
                TabsArray.map((item, index) => (
                    <div className='w-full p-4 flex items-center gap-2 shadow-md  cursor-pointer' key={index}>
                        <FaSquareArrowUpRight className='w-5 h-5' />
                        <p className={`${item.active ? "text-primary" : "text-text-neutral"} font-bold uppercase w-full text-sm`}>{item.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs