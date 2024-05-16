import React from 'react'

const ProgressBar = ({ progress = 0 }) => {
    const initialWidth = 7
    console.log(`${`w-[${(parseInt(progress * initialWidth)) / 100}rem]`}`)
    return (
        <div className='w-28 rounded-full h-5 bg-text-neutral relative border border-text-neutral flex items-center'>
            <span style={{
                width: `${parseInt(progress * 6.25) / 100}rem`
            }} className={`bg-success ${`w-[${parseInt(progress * 7) / 100}rem]`} h-3 rounded-full z-10 absolute left-1`}></span>
        </div>
    )
}

export default ProgressBar