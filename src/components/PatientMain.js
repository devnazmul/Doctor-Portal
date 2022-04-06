import React from 'react'
import Appointments from './Appointments'
import Files from './Files'
import Notes from './Notes'
import PatientDetails from './PatientDetails'

export default function PatientMain({patient, doctors, appointments, files}) {
  
  return (
    <div className='md:flex pl-2 pr-5 py-3 lg:pl-5 lg:pr-7  justify-center items-center'>
        <div className='w-full md:w-8/12'>
            <PatientDetails patient={patient} />
            <Appointments appointments={appointments} />
        </div>
        <div className='w-full md:w-4/12'>
            <Notes doctors={doctors} />
            <Files files={files} />
        </div>
    </div>
  )
}
