import React from 'react'
import { AiFillPrinter, AiOutlinePlus } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { IoIosArrowForward, IoIosNotifications } from 'react-icons/io'


export default function TopNav({ patient }) {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full py-3 flex justify-between items-center border-b border-b-gry px-5'>
                <div>
                    <h1 className='md:text-lg font-semibold flex items-center'>
                    <BsPerson className='text-2xl mr-2 font-bold text-primary' />
                     {patient.name}
                    </h1>
                </div>
                <div className='flex justify-center items-center'>
                    <input className='hidden md:block border border-gry rounded-full px-4 py-1' type="text" placeholder='🔎 search' />
                    
                    <button className='bg-primary ml-3 shadow-md  h-7 w-7 rounded-full flex justify-center items-center'>
                        <AiOutlinePlus className='text-white' />
                    </button>
                    <button className='bg-white relative ml-3 shadow-md h-7 w-7 rounded-full flex justify-center items-center'>
                        <span className='bg-red absolute top-0 right-0 block rounded-full h-2 w-2'></span>
                        <IoIosNotifications className='text-dgry' />
                    </button>
                </div>
            </div>
            <div className='w-full py-3 flex justify-between items-center border-b border-b-gry px-5'>

                <div className='flex justify-start items-center'>
                    <button className='md:mr-3 mr-1 text-xs md:text-xl text-primary'>
                        Patient List
                    </button>
                    <IoIosArrowForward className='text-md md:text-lg text-dgry' />
                    <button className='md:ml-3  ml-1 text-xs md:text-xl text-dgry'>
                        {patient.name}
                    </button>
                </div>

                <div className='flex justify-center items-center'>
                    <button className='bg-white ml-3 px-2 border border-gry py-2 rounded-md flex justify-center items-center'>
                        <AiFillPrinter className='text-dgry' />
                    </button>
                    <button className='bg-white px-2 relative ml-3 text-dgry border rounded-md border-gry md:px-5 py-2 md:py-1 flex justify-center items-center'>
                        <BiEdit className='text-dgry md:mr-2' />
                        <span className='hidden md:block'>Edit Patient</span> 
                    </button>
                </div>

            </div>
        </div>
    )
}
