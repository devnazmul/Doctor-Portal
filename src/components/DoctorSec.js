import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
export default function DoctorSec() {
    const [doctors, setDoctors] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails').then((res) => {
            setDoctors(res.data);
            console.log(res.data);
            setIsLoading(false)
        })

    }, [])

    return (
        <>
            {isLoading ?
                (<div className='doctor-section border-t-2 pt-5 flex px-5 justify-between'>
                    <div class=" p-4 max-w-sm w-full mx-auto">
                        <div class="animate-pulse flex items-center space-x-4">
                            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
                            <div className='flex flex-col'>
                                <div class="h-2 w-full bg-slate-300 rounded"></div>
                                <div class="h-2 w-1/2 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>)
                :
                (<div className='doctor-section border-t-2 pt-5 flex px-5 justify-between'>
                    <img className='w-12 h-12 rounded-full' src={doctors[0].avatar ? doctors[0].avatar : `https://i.ibb.co/JcyT67H/about-visual.png`} alt="" />
                    <div className='flex flex-col font-semibold'>
                        {doctors[0].name}
                        <span className='text-gray-400 text-xs'>{doctors[0].specification}</span>
                    </div><button><IoIosArrowDown /></button>
                </div>)
            }
        </>

    )
}
