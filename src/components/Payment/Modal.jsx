import React, { useState } from 'react'
import './modal.css'
import Amount from './Amount';
import Bank from './Bank';
import PaymentDetails from './PaymentDetails';
// import Tree from '../assets/Tree.svg';

const Modal = ({amount,setPay,setMessage,setEmail,setName,setBank,setAmount}) => {

  const [activeComponent, setActiveComponent] = useState('A');

  const renderComponent = () => {  
    switch (activeComponent) {  
        case 'A':  
            return <Amount setActiveComponent={setActiveComponent} setAmount={setAmount} setPay={setPay}/>;  
        case 'B':  
            return <Bank setActiveComponent={setActiveComponent} setPay={setPay}/>;  
        case 'C':  
            return <PaymentDetails setEmail={setEmail} setMessage={setMessage} setName={setName} setPay={setPay}/>;  
        default:  
            return <Amount setActiveComponent={setActiveComponent} setPay={setPay}/>;  
    }  
}; 
  return (
    <div className='modalBody'>
      {renderComponent()}
    </div>
  )
}

export default Modal