import React from 'react'
import { useState } from 'react'
import StudentsPage from '../StudentsPage/StudentsPage'
import MyData from './components/leftSection/MyData'
import TeacherCard from './components/leftSection/TeacherCard'
import AccordionsSection from './components/middleSection/AccordionsSection'
import Tabs from './components/middleSection/Tabs'
import AssignmentsCard from './components/rightSection/AssignmentsCard'
import DueCard from './components/rightSection/DueCard'

const MainPage = () => {
  const [showAllStudents,setShowAllStudents] = useState(false)


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full sm:gap-4 gap-y-4'>
      <div className='space-y-4 sm:order-1 lg:-order-none'>
        <TeacherCard />
        <MyData setShowAllStudents={setShowAllStudents} />
      </div>
      <div className="col-span-2 rounded-md">
        <Tabs />
        <AccordionsSection/>
      </div>
      <div className='space-y-4 sm:order-2 lg:-order-none'>
        <DueCard/>
        <AssignmentsCard/>
      </div>
      {
        showAllStudents && <StudentsPage setShowAllStudents={setShowAllStudents} showAllStudents={showAllStudents}/>
      }
    </div>
  )
}

export default MainPage