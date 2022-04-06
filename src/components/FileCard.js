import React from 'react';
import { FiFileText } from 'react-icons/fi';

export default function FileCard({ data }) {
  console.log('ppp', data);
  return (
    <div className='cursor-pointer text-dgry flex justify-between items-center px-5 py-3 shadow-md mb-2'>
      <div className='flex items-center justify-start'>
        <FiFileText className='text-lg mr-3' />
        <div className='text-xs'>Check Up Result.pdf</div>
      </div>

      <div className='dSize text-xs' >123 kb</div>
    </div>
  )
}
