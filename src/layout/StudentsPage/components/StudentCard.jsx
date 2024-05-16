import React from 'react'

const StudentCard = ({data}) => {
  return (
    <div className={`p-6 rounded-md shadow-md border ${data.selected ? 'border-primary': "border-text-neutral"} space-y-4`}>
        <div className='space-y-2'>
              <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full" />
        <p className='text-text-primary text-xl font-bold capitalize'>{data.name}</p>
        </div>

        <div className={`grid ${data.readingMin ? "grid-cols-3":"grid-cols-2"}`}>
            <div className=''>
                <p className='text-primary font-bold text-lg'>{data.fredoPoints}</p>
                <p>Freado Points</p>
            </div>
            <div className=''>
                <p className='text-primary font-bold text-lg'>{data.streaks}</p>
                <p>Streaks</p>
            </div>
            {
                data?.readingMin &&
            <div className=''>
                <p className='text-primary font-bold text-lg'>{data?.readingMin}</p>
                <p>Reading Mins</p>
            </div>
            }
        </div>
    </div>
  )
}

export default StudentCard