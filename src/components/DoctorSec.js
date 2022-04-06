import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
export default function DoctorSec({ doctors, menuIsOpen }) {
    return (
        <div title={doctors.name} className='doctor-section border-t-2 pt-5 flex px-3 md:px-5 justify-between'>
            <img className='w-10 h-10 md:w-12 md:h-12 rounded-full' src={doctors?.avatar ? doctors.avatar : `https://i.ibb.co/JcyT67H/about-visual.png`} alt="" />
            {menuIsOpen && (
                <div className='md:flex hidden flex-col justify-center font-semibold'>
                    <span className='text-xs xl:text-lg'>{doctors.name}</span> 
                    <span className=' text-gray-400 text-xs'>{doctors.specification}</span>
                </div>
            )}
            <button ><IoIosArrowDown className='text-xs' /></button>
        </div>


    )
}
