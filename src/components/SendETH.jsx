import React, { useState } from 'react'

const SendETH = () => {
  const [receiverAddress,setReceiverAddress] = useState(""); 
  const [amount, setAmount] = useState(0); 

  const handleSendEth = async (e) => {
    e.preventDefault();
    if (!receiverAddress || receiverAddress.trim() === "") return;
    if (!amount || amount <= 0) return;
   
    try {
      setDisableButtonOnSendEth(true);
     
      setDisableButtonOnSendEth(false);
      window.location.reload();
    }
    catch (err) {
      if (err.message === "no such account") {
        alert("no such account");
        return;
      }
      alert(err.message);
    }
  }
  return (
    <div>
      <p className='text-center text-primary font-bold text-2xl mb-3'>Send ETH</p>
      <hr className='mb-3' />
      <form action="" className='flex flex-col items-center gap-4' onSubmit={handleSendEth}>
        <input type="text" className='rounded-md px-4 w-full py-2 outline-none' value={receiverAddress} onChange={e => setReceiverAddress(e.target.value)} placeholder='Enter Receiver Address' />
        <input type="number" className='rounded-md px-4 w-full py-2 outline-none' placeholder='Enter Amount' value={amount} onChange={e => setAmount(e.target.value)} />
        <button type='submit' className='bg-primary py-2 w-1/2 rounded-md text-white hover:bg-accent hover:text-black'>Send</button>
      </form>
    </div>
  )
}

export default SendETH