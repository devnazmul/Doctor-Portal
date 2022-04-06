import moment from 'moment'
import React from 'react'
import { BsPerson } from 'react-icons/bs'

export default function Notes({ doctors }) {
  return (
    <div className='bg-white ml-2 mt-3 px-1 text-sm rounded-md'>
      <div className='flex justify-between items-center py-5 px-6'>
        <h2 className='font-semibold'>Notes</h2>
        <button className='text-primary font-medium'>See all</button>
      </div>
      <div className='bg-gray-100 pl-5 pr-4 rounded-md py-7'>
        <div className='mb-5 text-xs'>
          <p className='notes'>
            -This patient is lorem ipsum dolor sit amet <br />
            -Lorem ipsum dolor sit amet <br />
            -has alergic history with Cataflam <br />
          </p>
        </div>
        <div className='flex justify-end'>
          <button className='bg-primary text-white rounded-md py-1 px-2'>save note</button>
        </div>

      </div>
      <div className='flex justify-between items-center py-5 px-6'>
        <div  className='text-xs'>
          <h2>Lorem ipsum, dolor sit amet.</h2>
          <h5 className='flex items-center text-dgry mt-2'>
            <BsPerson className='text-xs mr-1 font-bold text-primary' />
            {doctors?.name}
          </h5>
        </div>

        <p className='text-xs text-dgry'>{moment(new Date()).format("D MMM YY")}</p>

      </div>
    </div>
  )
}
