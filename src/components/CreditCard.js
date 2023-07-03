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
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {checkCCType()}
            </div>
            <div>
                {ccNum}
            </div> 
            <div>
                Expires {expirationMonth}/{expirationYear} {bank}
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
}
