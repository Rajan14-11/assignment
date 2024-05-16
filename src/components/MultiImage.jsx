import React from 'react'


const MultiImage = ({data}) => {
  const translateVariants = {
    0:"-translate-x-0",
    1:"-translate-x-4",
    2:"-translate-x-8",
    3:"-translate-x-12",
  }
  return (
      <div className='flex items-center relative'>
        {
            data.map((item,index)=>(

                <img key={index} src={item.src} alt={item.alt} className={`w-16 h-16 rounded-full border-4 border-secondary ${translateVariants[index]}`} />
            ))
        }
      </div>
  )
}

export default MultiImage