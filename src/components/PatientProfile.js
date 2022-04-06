import React from 'react'

export default function PatientProfile({patient}) {
  return (
    <div className='lg:w-4/12 bg-white flex flex-col py-2 justify-center items-center rounded-l-md'>
        <img className='w-24 h-24 object-cover rounded-full' src={`${patient.avatar ? patient.avatar : 'https://i.ibb.co/0ZPJPLh/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg'}`} alt="" />
        <h1 className='text-xl font-semibold'>{patient.name}</h1>
        <span className='text-dgry text-xs'>{patient['e-email']}</span>
        <div className='flex justify-between items-center h-10 w-full mt-2'>
          <div className='w-5/12 flex flex-col text-dgry text-xs justify-center items-center'>
            <span className='font-semibold text-xl text-gray-900'>{patient.Past}</span> 
            Past
          </div>

          <span className='vertical-line h-5/6 block bg-gry'></span>

          <div className='w-5/12 flex flex-col text-dgry text-xs justify-center items-center'>
            <span className='font-semibold text-xl text-gray-900'>{patient.Upcoming}</span>
            Upcoming
          </div>
        </div>
        <button className='border border-gry my-5 px-10 py-1 text-sm'>Send Message</button>
      </div>
  )
}
