import React, { useState } from 'react'
import { handleCreateAccountAndLogin } from '../utils/accountUtils';
import { useNavigate } from 'react-router-dom';

const LoginWithSeedPhrase = () => {

    const [seedPhrase, setSeedPhrase] = useState(""); 
    const navigate = useNavigate(); 
    const handleLogin = async (e) => {
        e.preventDefault(); 
        handleCreateAccountAndLogin(seedPhrase)
        .then(res => {
            console.log("Logged In"); 
            navigate("/")
            window.location.reload();
        })
        .catch(err => {
            console.log(err); 
        })
    }

    return (
        <div className='my-24'>
            <p className='text-3xl font-bold text-center mb-14 text-white'>Login Using Private Key</p>
            <form action="" className='flex flex-col justify-center items-center gap-6' onSubmit={handleLogin}>
                <input className='rounded-md w-full px-4 py-2 outline-none' type="text" value={seedPhrase} onChange={e => setSeedPhrase(e.target.value)} placeholder='Enter SeedPhrase' />
                <button className='bg-primary hover:bg-accent hover:text-black font-semibold px-6 py-2 rounded-md text-white'>Login</button>
            </form>
        </div>
    )
}

export default LoginWithSeedPhrase