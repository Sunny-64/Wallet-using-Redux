import React, { useState } from 'react'
import {copyIcon} from './../assets/index'

const AccountDetails = () => {
    const [address, setAddress] = useState("0x3489....0246"); 
    const [copyClicked, setCopyClicked] = useState(false); 
    const copyToClipboard = () => {
        setCopyClicked(true); 
        navigator.clipboard.writeText(address); 
        setTimeout(() => {
            setCopyClicked(false); 
        }, 500); 
    }

    return (
        <div className="grid grid-cols-3 gap-3">
            <div className={`secondary-card relative col-span-2 bg-primary h-[70px] rounded-md shadow-md `} >
                <span className="text-accent absolute opacity-[0.6] px-1 text-[0.8rem] font-semibold">Address</span>

                <span className='flex justify-between items-center h-full px-4'>
                    <p className="text-white text-center font-bold text-3xl opacity-80">{address}</p>
                    <div onClick={copyToClipboard} className={`shadow-lg rounded-md bg-secondary opacity-60 right-3 p-3 cursor-pointer transition-all duration-400  ${copyClicked && 'bg-accent'}`}>
                        <img  className='w-[20px]  invert' src={copyIcon} alt="icon" />
                    </div>
                </span>

            </div>
            <div className="col-span-1 bg-primary h-[70px] rounded-md shadow-md">
                <p className="text-accent opacity-[0.6] px-1 text-[0.8rem] font-semibold">Balance</p>
                <p className="text-white text-center font-bold text-2xl">0.037 ETH</p>
            </div>
        </div>
    )
}

export default AccountDetails