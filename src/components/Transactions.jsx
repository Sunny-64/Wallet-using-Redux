import React from 'react'

const Transactions = () => {
    const CONTENT = [
        {
            from: "0x8848...4737",
            to: "0x8743...4738",
            amount: "0.341"
        },
        {
            from: "0x8848...4737",
            to: "0x8743...4738",
            amount: "0.442"
        },
        {
            from: "0x8848...4737",
            to: "0x8743...4738",
            amount: "0.777"
        },
        {
            from: "0x8848...4737",
            to: "0x8743...4738",
            amount: "0.777"
        },
    ]
    return (
        <>
            {CONTENT.map((tx, index) => 
                <div key={index} className="bg-primary rounded-md py-2 px-3 flex justify-between my-4">
                    <div className="flex gap-1">
                        <span className="text-white text-[0.8rem] self-end font-semibold opacity-[0.8]">from</span>
                        <span className="text-highlight text-xl font-semibold">{tx.from}</span>
                        <span className="text-white text-[0.8rem] self-end font-semibold opacity-[0.8]">to</span>
                        <span className="text-highlight text-xl font-semibold">{tx.to}</span>
                    </div>
                    <div>
                        <span className="font-bold text-lg text-white">{tx.amount} ETH</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Transactions