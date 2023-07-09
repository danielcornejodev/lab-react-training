import React from 'react';
import { useState } from 'react';
import manImage from '../assets/images/maxence.png';
import sunglasses from '../assets/images/maxence-glasses.png'

export default function ClickablePicture() {

        const [isChecked, setIsChecked] = useState(false);

        const toggleSunglasses = () => {
            setIsChecked(!isChecked);
        }


    return (
        <div>
            <img onClick={toggleSunglasses} className={!isChecked ? 'visible' : ''} src={manImage} />
            <img onClick={toggleSunglasses} className={isChecked ? 'visible' : ''} src={sunglasses} />
        </div>
    )
}
