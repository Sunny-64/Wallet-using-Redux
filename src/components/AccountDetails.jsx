import React, { useEffect, useState } from 'react'
import {copyIcon} from './../assets/index'
import { useSelector } from 'react-redux';

const AccountDetails = () => {

    const acc = useSelector(state => state.account);  
   
    const [copyClicked, setCopyClicked] = useState(false); 

    const copyToClipboard = () => {
        setCopyClicked(true); 
        navigator.clipboard.writeText(acc.publicKey); 
        setTimeout(() => {
            setCopyClicked(false);
        }, 500)
    }

    console.log("clicked")
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className={`secondary-card relative col-span-2 bg-primary h-[70px] rounded-md shadow-md `} >
                <span className="text-accent absolute opacity-[0.6] px-1 text-[0.8rem] font-semibold">Address</span>

                <span className='flex justify-between items-center h-full px-4'>
                    <p className="text-white text-center font-bold text-3xl opacity-80">{`${acc.publicKey.substring(0,6)}.....${acc.publicKey.substring(acc.publicKey.length - 5, acc.publicKey.length -1)}`}</p>
                    <div onClick={copyToClipboard} className={`shadow-lg rounded-md opacity-60 right-3 p-3 cursor-pointer transition-all duration-200  ${copyClicked ? 'bg-highlight' : 'bg-secondary'}`}>
                        <img  className='w-[20px] invert' src={copyIcon} alt="icon" />
                    </div>
                </span>

            </div>
            <div className="col-span-1 bg-primary h-[70px] rounded-md shadow-md">
                <p className="text-accent opacity-[0.6] px-1 text-[0.8rem] font-semibold">Balance</p>
                <p className="text-white text-center font-bold text-2xl">{(Math.floor(parseFloat(acc.balance) * 1000) / 1000).toFixed(3)} ETH</p>
            </div>
        </div>
    )
}

export default AccountDetails