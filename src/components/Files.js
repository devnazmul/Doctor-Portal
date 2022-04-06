import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import FileCard from '../components/FileCard';
export default function Files({files}) {
  // console.log(typeof );
  
  return (
    <div className='bg-white ml-2 my-2 mb-10 pb-5 px-1 text-sm rounded-md'>
      <div className='flex justify-between items-center py-5 px-6'>
        <h2 className='font-semibold'>Files/Documents</h2>
        <button className='text-primary font-medium flex items-center'><AiOutlineFileAdd className='mr-1' /> Add Files</button>
      </div>
      <div className='filesContainer scrollBar scrollbar-thin scrollbar-thumb-gray-400 px-5 overflow-y-scroll h-24'>
        {/* THIS API NOT HVAVE ENOUGH INFO  */}
        {/* {
          files[0].files.map((data)=>{
            <FileCard key={data} />
          })
        } */}

        <FileCard />
        <FileCard />
        <FileCard />

      </div>
    </div>
  )
}
