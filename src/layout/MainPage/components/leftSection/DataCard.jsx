import React from 'react'
import { FaUsers } from "react-icons/fa6";
import TeacherImage from '../../../../assets/teacherImg.jpg'
import MultiImage from '../../../../components/MultiImage';

const imagesData=[
  {
    src:TeacherImage,
    alt:"image1"
  },
  {
    src:TeacherImage,
    alt:"image2"
  },
  {
    src:TeacherImage,
    alt:"image3"
  },
  {
    src:TeacherImage,
    alt:"image4"
  },
]

const DataCard = ({title,data,setShowAllStudents}) => {
  return (
    <div className='space-y-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-text-primary space-x-1 flex items-center gap-2 font-bold uppercase'><FaUsers className='h-6 w-5'/>{title}</h1>
            <button className='text-text-neutral text-sm cursor-pointer font-medium' onClick={()=>setShowAllStudents(true)}>View All</button>
        </div>

        <MultiImage data={imagesData}/>
    </div>
  )
}

export default DataCard