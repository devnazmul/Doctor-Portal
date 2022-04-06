import React from 'react';
import PatientDetailsGrid from './PatientDetailsGrid';
import PatientProfile from './PatientProfile';

export default function PatientDetails({patient}) {

  return (
    <div className='bg-transparent md:flex md:mr-2 mt-2'>
      <PatientProfile patient={patient} />
      <PatientDetailsGrid patient={patient} />
    </div>
  )
}
