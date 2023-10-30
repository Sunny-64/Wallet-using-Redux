import React from 'react'

import { handleCreateAccountAndLogin } from '../utils/accountUtils'; 
import { Link } from 'react-router-dom';
   

const CreateAccount = () => {


    const handleCreateAccount = async (e) => {
        e.preventDefault();
        handleCreateAccountAndLogin()
        .then(res => {
            console.log("Account Created"); 
        })
        .catch(err => {
            console.log(err); 
        })
    }

    return (
        <div className='flex items-center flex-col justify-center h-full'>
            <p className='font-bold text-4xl text-white text-center mb-7'>Secure Wallet</p>
            <div className='flex flex-col items-center my-6'>
                <button onClick={handleCreateAccount} className='bg-primary font-semibold shadow-md text-white px-3 rounded-md py-2 mb-3'>Create Account</button>
                <Link to={'/login'} className='bg-accent rounded-md font-semibold shadow-md px-3 py-2'>Login using Private key</Link>
            </div>
        </div>
    )
}

export default CreateAccount