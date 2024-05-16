import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import StudentCard from './components/StudentCard';
import TeacherImage from "../../assets/teacherImg.jpg"

const studentsData = [
    {
        name: 'kashish',
        fredoPoints: '125',
        streaks: 6,
        readingMin: 125,
        image: TeacherImage,
        selected: true
    },
    {
        name: 'kashish',
        fredoPoints: '125',
        streaks: 6,

        image: TeacherImage,
        selected: true
    },
    {
        name: 'kashish',
        fredoPoints: '125',
        streaks: 6,

        image: TeacherImage,
        selected: false
    },
    {
        name: 'kashish',
        fredoPoints: '125',
        streaks: 6,

        image: TeacherImage,
        selected: false
    },
]

const StudentsPage = ({ setShowAllStudents,showAllStudents }) => {
    return (
        <div className={`z-[100] fixed ${showAllStudents ? 'inset-0':'-inset-500'} inset- bg-secondar p-6 sm:p-16 backdrop-brightness-90 h-full duration-500 ease-in-out`}>
            <div className='bg-secondary rounded-lg w-full h-full space-y-6 overflow-auto '>
                <div className='flex items-center justify-between sticky top-0 backdrop-blur-xl px-8 py-4 gap-4'>
                    <h1 className='text-text-primary capitalize text-3xl font-bold'>Your Students</h1>
                    <IoIosCloseCircle className='text-text-neutral w-8 h-8 cursor-pointer' onClick={()=>setShowAllStudents(false)} />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8'>
                {
                    studentsData.map((item, index) => (
                        <StudentCard data={item} key={index} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default StudentsPage