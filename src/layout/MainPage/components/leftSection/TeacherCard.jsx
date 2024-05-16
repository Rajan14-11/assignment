import React from 'react'
import TeacherImage from '../../../../assets/teacherImg.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const TeacherCard = () => {
    return (
        <div className='w-full bg-secondary p-4 flex flex-col rounded-md shadow-md'>
            <div className='flex flex-col gap-1 items-center'>
                <div className='w-20 h-20 rounded-full'>
                    <img src={TeacherImage} alt="teacherProfile" className='w-full h-full rounded-full object-cover' />
                </div>
                <h1 className='text-text-primary font-medium'>Texaher Name</h1>
                <p className='text-text-neutral font-medium'>School Name</p>
            </div>

            <div className='flex items-center justify-between px-2 py-1 bg-text-neutral/20 rounded mt-3 '>
                <div className='flex items-center gap-1'>
                    <FaEdit className='text-primary font-semibold' />
                    <p className='text-text-primary'>Grade 3</p>
                </div>
                <button className='flex gap-1 items-center bg-primary text-secondary px-3 py-1 rounded'>Section <span><IoIosArrowDown /></span></button>
            </div>
        </div>
    )
}

export default TeacherCard