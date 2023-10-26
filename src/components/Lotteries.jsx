import React from 'react'
import { suzume } from '../assets'

const Lotteries = () => {
  return (
    <div className=''>
        <div className='bg-primary rounded-lg flex items-center px-2'>
          <div className='h-[80px] flex items-center'>
              <img className='w-[80px] object-cover' src={suzume} alt="" />
          </div>
          <div className='px-2'>
              <p className='text-white'>Lottery Name</p>
              <p className='text-[0.8rem] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat commodi tenetur saepe est, eaque vel?</p>
          </div>

          <button className='bg-accent py-2 px-3 rounded-md'>
            <span>Ticket</span>  <span>0.348 ETH</span></button>
        </div>
        
    </div>
  )
}

export default Lotteries