import React from 'react'

export default function PatientDetailsGrid({ patient }) {
    return (
        <div className='lg:w-8/12 md:ml-2 mt-5 md:mt-0 bg-white grid grid-rows-3 grid-flow-col gap-4 px-5 py-2 text-xs rounded-r-md'>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Gender</h2>
                <p>{patient.Gender}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Street Address</h2>
                <p>{patient['Street Address']}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Member Status</h2>
                <p>{patient['Member Status']}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Birthday</h2>
                <p>{patient.Birthday}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>City</h2>
                <p>{patient?.Citys?patient.City:'N/A'}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Register Date</h2>
                <p>{patient['Register Date']}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>Phone Number</h2>
                <p>{patient['Phone Number']}</p>
            </div>
            <div className='py-8 lg:py-1 flex flex-col justify-center border-b border-b-lgry'>
                <h2 className='text-dgry font-medium'>ZIP Code</h2>
                <p>{patient['ZIP Code']}</p>
            </div>
        </div>
    )
}
