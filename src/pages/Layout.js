import React, { useState } from 'react'
import { AiOutlineInfoCircle, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiDollarCircle } from 'react-icons/bi'
import { BsCalendar4Range, BsChatText, BsPerson } from 'react-icons/bs'
import { VscDashboard, VscSettings } from 'react-icons/vsc'
import { Route, Routes } from 'react-router-dom'
import DoctorSec from '../components/DoctorSec'
import SingleLink from '../components/SingleLink'
import Calendar from './Calendar'
import Messages from './Messages'
import Overview from './Overview'
import PatientList from './PatientList'
import PaymentInfo from './PaymentInfo'
import Settings from './Settings'

export default function Layout() {
    const [menuIsOpen, setMenuIsOpen] = useState(true)
    return (
        <div className='flex h-screen w-full'>
            <nav className={`bg-white ${menuIsOpen ? 'w-3/12' : 'w-1/12' }  py-5 flex justify-between flex-col`}>
                {menuIsOpen ? (
                    <div className='w-full flex justify-between pl-5  items-center'>
                        <img className=' mr-7' src="https://i.ibb.co/jgKzjw3/Screenshot-7.png" alt="doctor-portal" />
                        <button onClick={()=>{
                            setMenuIsOpen(!menuIsOpen)
                        }} className='mr-5 text-slate-400'>
                            <AiOutlineMenuFold className='text-2xl' />
                        </button>
                    </div>
                ) : (
                    <div className='w-full flex justify-between pl-2  items-center'>
                        <img className='mr-1' src="https://i.ibb.co/NjxGdDJ/Screenshot-8.png" alt="doctor-portal" />
                        <button onClick={()=>{
                            setMenuIsOpen(!menuIsOpen)
                        }} className='mr-5 text-slate-400'>
                            <AiOutlineMenuUnfold className='text-2xl' />
                        </button>
                    </div>
                )}
                <ul>
                    <li className='my-5'>
                        <SingleLink to='/overview' Icon={VscDashboard} title={'Overview'} menuIsOpen={menuIsOpen} />
                    </li>
                    <li className='my-5'>
                        <SingleLink to='/calendar' Icon={BsCalendar4Range} title={'Calendar'} menuIsOpen={menuIsOpen} />
                    </li>
                    <li className='my-5'>
                        <SingleLink to='/patient-list' Icon={BsPerson} title={'Patient List'} menuIsOpen={menuIsOpen} />
                    </li>
                    <li className='my-5'>
                        <SingleLink to='/messages' Icon={BsChatText} title={'Messages'} menuIsOpen={menuIsOpen} />
                    </li>
                    <li className='my-5'>
                        <SingleLink to='/payment' Icon={BiDollarCircle} title={'Payment Information'} menuIsOpen={menuIsOpen} />
                    </li>
                    <li className='my-5'>
                        <SingleLink to='/settings' Icon={VscSettings} title={'Settings'} menuIsOpen={menuIsOpen} />
                    </li>
                </ul>
                <button className='px-5 text-md flex justify-start items-center font-medium text-gray-500'>
                    <AiOutlineInfoCircle className='mr-2' /> Help?
                </button>
                <DoctorSec />
            </nav>
            <div className='main-container w-full bg-slate-100'>
                <Routes>
                    <Route path="/" element={<PatientList />} />
                    <Route path="/patient-list" element={<PatientList />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/payment" element={<PaymentInfo />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}
