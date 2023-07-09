import React, { useState } from "react";
// Import all images ==> but seperate empty image from the rest
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
// Organize all images with dice to an array
const diceData = [dice1, dice2, dice3, dice4, dice5, dice6];

export default function Dice() {
  // Initialize the state of dice with emptyDice
  const [dice, setDice] = useState(() => diceData[2] );
  
  // Function to set 'dice' state to 'emptyDice' to dispaly empty dice image
  const handleClick = () => {
    setDice(emptyDice);

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * diceData.length);
        setDice(diceData[randomIndex]);
      }, 1000);
  };

  // Function to delay the update of the 'dice' state with a random dice image.
  // Generate the random index based on the length of the diceData, and set 'dice' state to the corresponding dice image
// using setDice(diceData[randomIndex])




  return (
    <div>
      <img style={{width: '300px'}} src={dice} alt="dice" onClick={handleClick} />
    </div>
    // Add onClick with handleClick to trigger the dice roll when clicked
  )
}