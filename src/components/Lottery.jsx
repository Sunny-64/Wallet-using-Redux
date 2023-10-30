import React from 'react'
import { suzume } from '../assets'


const Lottery = () => {
    return (
        <div className='bg-primary rounded-lg  px-1 grid grid-cols-6 my-3'>
            <div className='h-[80px] flex items-center col-span-1 place-self-center'>
                <img className='h-[60px] object-cover' src={suzume} alt="" />
            </div>
            <div className='px-1 col-span-4 flex flex-col mt-2'>
                <p className='text-white text-[0.8rem] font-semibold'>Lottery Name</p>
                <p className='text-[0.7rem] text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat commodi tenetur saepe est, eaque vel?</p>
            </div>

            <div className='col-span-1 place-self-center'>
                <button className='bg-accent px-2 rounded-md flex items-center flex-col '>
                    <span className='text-[0.8rem] font-semibold'>Ticket</span>  <span className='text-[0.7rem] font-medium'>0.348 ETH</span>
                </button>
            </div>
        </div>
    )
}

export default Lottery