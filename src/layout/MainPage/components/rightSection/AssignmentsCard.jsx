import React from 'react'
import { MdError } from "react-icons/md";
import Assignment from './Assignment';
import { IoAddOutline } from "react-icons/io5";

const assignmentData=[
    {
        type:'event',
        title:'Monthly Talent Show Postponed',
        date:'4/6/20',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        type:'holiday',
        title:'Monthly Talent Show Postponed',
        date:'4/6/20',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        type:'event',
        title:'Monthly Talent Show Postponed',
        date:'4/6/20',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
]
const AssignmentsCard = () => {
  return (
    <div className='py-4 px-6 w-full rounded-md bg-secondary h-fit relative pb-20 shadow-md'>
        <h1 className='flex items-center gap-2 font-bold text-text-primary uppercase'><MdError className='w-5 h-5'/>Assignments</h1>
        {
            assignmentData.map((item,index)=>(
                <Assignment data={item} key={index} />
            ))
        }

        <div className='w-16 h-16 rounded-full bg-primary text-secondary absolute bottom-2 cursor-pointer right-2 flex items-center justify-center'>
            <IoAddOutline className='w-8 h-8 font-bold'/>
        </div>
    </div>
  )
}

export default AssignmentsCard