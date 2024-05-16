import React from 'react'
import ProgressBar from '../../../../components/ProgressBar'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import MultiImage from '../../../../components/MultiImage';
import TeacherImage from '../../../../assets/teacherImg.jpg'
import { FiMessageCircle } from "react-icons/fi";

const Accordion = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const imagesData = [
        {
            src: TeacherImage,
            alt: "image1"
        },
        {
            src: TeacherImage,
            alt: "image2"
        },
        {
            src: TeacherImage,
            alt: "image3"
        },
        {
            src: TeacherImage,
            alt: "image4"
        },
    ]
    return (

        <div className='border p-4 space-y-3 rounded w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-3 w-full text-text-primary gap-6 rounded' onClick={() => setIsOpen(!isOpen)}>
                <div className='w-full sm:border-r border-text-neutral flex gap-2 col-span-2 sm:col-span-1 justify-between sm:block'>
                    <div>
                        <p className='font-semibold'>Assigned On</p>
                        <p className='font-bold'>{data.assignedOn}</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Due On</p>
                        <p className='font-bold'>{data.dueOn}</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-bold'>{data.unitName}</p>
                    <p className='text-text-neutral'>Unit Description - {data.unitDesc}</p>
                </div>
                <div className='flex sm:items-center h-full justify-between flex-col sm:flex-row items-end'>
                    <div className='space-y-4'>
                        <ProgressBar progress={data.progress} />
                        <button className='border border-success text-success uppercase rounded text-sm font-semibold px-3 py-1'>{data.status}</button>
                    </div>
                    {
                        isOpen ? <IoIosArrowUp className='w-6 h-6 text-text-neutral cursor-pointer duration-300 ease-out' /> :
                            <IoIosArrowDown className='w-6 h-6 text-text-neutral cursor-pointer duration-300 ease-out' />
                    }
                </div>
            </div>

            {
                isOpen &&
                <div className='grid grid-cols-2 xl:grid-cols-3 w-full text-text-primary gap-4 rounded items-center'>
                    {
                        data.tasks.map((task, index) => (
                            <>
                                <div className='w-full'>
                                    <p className='text-text-neutral flex items-center text-sm font-semibold gap-1'><FiMessageCircle/>{`Task ${index+1} - ${task.title}`}</p>
                                </div>
                                <div className='space-y-2 flex items-end xl:items-start w-full'>
                                    <ProgressBar progress={task.progress}/>
                                </div>
                                <div className='flex items-center h-full justify-between col-span-2 xl:col-span-1'>
                                    <MultiImage data={imagesData} css={'w-10 h-10'} />
                                </div>
                            </>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Accordion