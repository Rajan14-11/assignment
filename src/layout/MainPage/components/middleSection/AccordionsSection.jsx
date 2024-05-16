import React from 'react'
import Accordion from './Accordion'

const accordionsData = [
    {
        assignedOn: '16 Dec 2023',
        dueOn: '23 Dec 2023',
        unitName: "unit name",
        unitDesc: 'Lorem ipsum dolor sit amet ',
        status: 'completed',
        progress: '100',
        tasks: [
            {
                title: 'Ting ting',
                progress: '80'
            },
            {
                title: 'Prepositions',
                progress: '80'
            }
        ]
    },
    {
        assignedOn: '16 Dec 2023',
        dueOn: '23 Dec 2023',
        unitName: "unit name",
        unitDesc: 'Lorem ipsum dolor sit amet ',
        status: 'completed',
        progress: '80',
        tasks: [
            {
                title: 'Ting ting',
                progress: '80'
            },
            {
                title: 'Prepositions',
                progress: '80'
            }
        ]
    },
    {
        assignedOn: '16 Dec 2023',
        dueOn: '23 Dec 2023',
        unitName: "unit name",
        unitDesc: 'Lorem ipsum dolor sit amet ',
        status: 'completed',
        progress: '60',
        tasks: [
            {
                title: 'Ting ting',
                progress: '90'
            },
            {
                title: 'Prepositions',
                progress: '80'
            }
        ]
    },
]
const AccordionsSection = () => {
    return (
        <div className='h-fit border border-text-primary rounded-md p-6 sapce-y-4 flex flex-col gap-4 duration-500 bg-secondary'>
            {
                accordionsData?.map((item, index) => (


                    <Accordion data={item} key={index} />

                ))
            }
        </div>
    )
}

export default AccordionsSection