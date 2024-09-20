import React, { useState } from 'react'
import './Payout.css'
import { BsBank } from "react-icons/bs";
import PayoutModal from '../../components/PayoutModal/PayoutModal';

const Payout = () => {
  const [modal,setModal] = useState(false)
  return (
    <div className='payoutBody'>
      {
        modal ? <PayoutModal setModal={setModal}/>:null
      }
      <h2 className="pageName" style={{marginTop: '20px'}}>Payout</h2>
      <div className='payoutContent'>
        <div className='payoutBankDetails'>
          <div className='payoutBankBox'>
            <div className='payoutBankIcon'>
              <BsBank size={20}/>
            </div>
            <div className='payoutAccDetailsBox'>
              <h2>Bank Account</h2>
              <div>Connect a bank account to begin withdrawing funds.</div>
              <button onClick={()=>setModal(true)}>connect</button>
            </div>
          </div>
          <div className='payoutWidDetails'>
            <div className='norBal'>Balance: ₦100,000</div>
            <div className='WithBal'>withdrawable Balance: ₦100,000</div>
            <button className='withdraBtn'>My transaction</button>
          </div>
        </div>
        <div className='payoutTableBox'>
          hi
        </div>
      </div>
    </div>
  )
}

export default Payout