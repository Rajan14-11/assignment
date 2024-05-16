import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='bg-gradient-to-b from-background to-secondary from-50% to-50% w-ful min-h-screen h-full py-8 w-[87%] mx-auto '>
        {children}
    </div>
  )
}

export default MainLayout