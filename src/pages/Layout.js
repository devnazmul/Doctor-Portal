import axios from "axios"
import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle, AiOutlineMenuFold } from 'react-icons/ai'
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
    const [patient, setPatient] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState();
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails').then((res) => {
            setPatient(res.data[0])
        }).then(() => {
            axios.get('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails').then((res) => {
                setDoctors(res.data[0]);
            }).then(() => {
                axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details').then((res) => {
                    setAppointments(res.data[0]);
                }).then(() => {
                    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/Files').then((res) => {
                        setFiles(res.data[0].files);
                    }).then(() => {
                        setIsLoading(false)
                    })
                })
            })
        });
    }, [])

    return (
        <div className='flex h-screen w-full'>
            <nav className={`bg-white ${menuIsOpen ? 'w-3/12' : 'w-2/12 md:w-1/12'}  py-5 flex justify-between flex-col`}>

                <div className='w-full flex justify-between pl-5 items-center'>
                    {menuIsOpen ? (
                        <img className='mr-7 hidden lg:block' src="https://i.ibb.co/jgKzjw3/Screenshot-7.png" alt="doctor-portal" />
                    ) : (
                        <img className='mr-1 hidden lg:block' src="https://i.ibb.co/NjxGdDJ/Screenshot-8.png" alt="doctor-portal" />
                    )}
                    <img className=' block lg:hidden' src="https://i.ibb.co/NjxGdDJ/Screenshot-8.png" alt="doctor-portal" />
                    <button onClick={() => {
                        setMenuIsOpen(!menuIsOpen)
                    }} className='hidden md:block md:mr-3 xl:mr-5 text-slate-400'>
                        <AiOutlineMenuFold className='text-2xl' />
                    </button>
                </div>

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
                <button className='mb-2 px-5 text-xs flex justify-start items-center font-medium text-gray-500'>
                    <AiOutlineInfoCircle className='mr-2' /> Help?
                </button>
                <DoctorSec doctors={doctors} menuIsOpen={menuIsOpen} />
            </nav>
            <div className='main-container w-full h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-dgry bg-lgry'>
                {!isLoading ?
                    (<Routes>
                        <Route path="/" element={
                            <PatientList
                                patient={patient}
                                doctors={doctors}
                                appointments={appointments}
                                files={files}

                            />
                        } />
                        <Route path="/patient-list" element={
                            <PatientList
                                patient={patient}
                                doctors={doctors}
                                appointments={appointments}
                                files={files}

                            />
                        } />
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/payment" element={<PaymentInfo />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>) : (
                        <div className='flex justify-center items-center text-5xl w-full h-screen'>Loading ...</div>
                    )
                }

            </div>
        </div>
    )
}
