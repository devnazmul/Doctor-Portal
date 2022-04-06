import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import AppoinmentCard from './AppoinmentCard';

export default function Appointments({ appointments }) {
  const [isOpened, setisOpened] = useState('upcomingAppoinments');

  const appoinmentQuerry = (a) => {
    setisOpened(a)
  }
 
  return (
    <div className='bg-white lg:mr-2 my-5 lg:my-2 rounded-md p-3'>
      <div className='lg:w-9/12 text-xs bg-gray-100 rounded-lg flex py-1 justify-between px-1'>
        <button
          onClick={() => { appoinmentQuerry('upcomingAppoinments') }}
          className={`${isOpened === 'upcomingAppoinments' ? 'bg-white text-primary' : 'bg-transparent text-dgry'}  font-semibold px-3 py-2 rounded-lg`}
        >
          Upcoming Appointments
        </button>
        <button
          onClick={() => { appoinmentQuerry('pastApoinments') }}
          className={`${isOpened === 'pastApoinments' ? 'bg-white text-primary' : 'bg-transparent text-dgry'}  font-semibold px-3 py-2 rounded-lg`}
        >
          Past Appointments
        </button>
        <button
          onClick={() => { appoinmentQuerry('medicalRecords') }}
          className={`${isOpened === 'medicalRecords' ? 'bg-white text-primary' : 'bg-transparent text-dgry'}  font-semibold px-3 py-2 rounded-lg`}
        >
          Medical Records
        </button>
      </div>
      <div className='relative appoin-cards bg-gray-100 py-2  px-5 mt-3 rounded-md'>
        <div className='appoin-cards text-xs  font-semibold mt-1 mb-2 bg-gray-100 w-full flex justify-between items-center'>
          <h2 className=''>Root Canal Treatment</h2>
          <button className='flex bg-white py-2 px-3 text-gray-500'>
            <MdOutlineKeyboardArrowUp className='text-lg mr-1' /> 
            <span className='hidden lg:block'>Show Previous Treatment</span> 
          </button>
        </div>
        <div className='scrollBarSpecial scrollBar h-32 appoin-cards scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:pr-4'>
          {
            isOpened === 'upcomingAppoinments' ?
              <AppoinmentCard appointments={appointments['Upcoming Appointments']} />
              :
              <div className='w-full flex h-full justify-center items-center'>
                No Data Found
              </div>
          }
        </div>
      </div>
    </div>
  )
}
