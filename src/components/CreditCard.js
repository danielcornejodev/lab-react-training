import React from 'react'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const checkCCType = () => {
        if(type === 'Visa' || type === 'Master Card') {
            return type;
        } else {
            return 'Not a supported credit card type'
        }
    }

    const ccNum = number.replace(/\d(?=\d{4})/g, "*");

    return (
        <div className='credit-card' style={{backgroundColor: bgColor, color: color}}>
        {checkCCType()} {ccNum}
        </div>
    )
}
