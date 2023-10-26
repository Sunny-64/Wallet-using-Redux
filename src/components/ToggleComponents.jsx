import React, { useState } from 'react'
import Transactions from './Transactions'
import Lotteries from './Lotteries'
import Staking from './Staking'

const ToggleComponents = () => {
    const [toggleView, setToggleView] = useState(0);
    return (
        <>
            <div className="grid grid-cols-3 mt-8 gap-3">
                <button onClick={() => setToggleView(0)} className={`bg-primary text-white rounded-md py-3 font-semibold text-lg ${toggleView === 0 && 'active'}`}>Transactions</button>
                <button onClick={() => setToggleView(1)} className={`bg-primary text-white rounded-md py-3 font-semibold text-lg ${toggleView === 1 && 'active'}`}>Lotteries</button>
                <button onClick={() => setToggleView(2)} className={`bg-primary text-white rounded-md py-3 font-semibold text-lg ${toggleView === 2 && 'active'}`}>Stake</button>
            </div>

            <div className="content-card bg-opaque mt-8 py-2 px-3 rounded-lg h-[260px] overflow-y-auto">
                {
                    toggleView === 0 ? <Transactions />
                        : toggleView === 1 ? <Lotteries />
                            : toggleView === 2 ? <Staking />
                                : setToggleView(0)
                }
            </div>
        </>
    )
}

export default ToggleComponents