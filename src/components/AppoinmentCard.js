import React from 'react';
import { CgNotes } from 'react-icons/cg';

export default function AppoinmentCard({appointments}) {
    
    return (
        <div className='relative w-full overflow-visible'>
            <div className='appoinment-card my-3 w-full py-2 lg:py-5 shadow-md bg-white flex justify-between items-center'>
            <div className='w-3/12 border-r border-r-gry px-1 lg:px-5'>
                <h1 className='appoin-cards text-xs lg:text-xl font-semibold'>{appointments?.Date}</h1>
                <p className='appoin-cards text-xs text-dgry mt-1'>{appointments?.Time}</p>
            </div>
            <div className='w-3/12 border-r border-r-gry px-1 lg:px-5'>
                <h5 className='text-xs text-dgry mb-1' >Treatment</h5>
                <h1 className='font-semibold text-xs lg:text-xl'>{appointments?.Treatment}</h1>
            </div>
            <div className='w-6/12  px-1 lg:px-5 flex justify-between items-center'>
                <div className=''>
                    <h5 className='text-xs text-dgry mb-1'>Dentist</h5>
                    <h1 className=' text-xs lg:text-sm font-medium'>{appointments?.Dentist}</h1>
                </div>
                <div className=''>
                    <h5 className='text-xs text-dgry mb-1'>Nurse</h5>
                    <h1 className=' text-xs lg:text-sm font-medium'>{appointments?.Nurse}</h1>
                </div>
                <a href={appointments?.Doc} title='note' className='text-primary text-xs font-bold flex items-center'><CgNotes className='text-sm lg:mr-1' />
                <span className='hidden lg:block'> Note</span></a>
            </div>
        </div>
        </div>
        
    )
}
