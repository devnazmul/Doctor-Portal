import React from 'react';
import PatientMain from '../components/PatientMain';
import TopNav from '../components/TopNav';

export default function PatientList({doctors, patient, appointments, files}) {

  return (
    <div className='w-full h-screen'>
      <TopNav patient={patient} doctors={doctors} />
      <PatientMain patient={patient} doctors={doctors} appointments={appointments} files={files} />
    </div>
  )
}
