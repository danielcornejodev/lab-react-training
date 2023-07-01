import React from 'react'

export default function Random({ min, max }) {

  const calcRandom = () => {
    return Math.floor(Math.random() * max) + min;
  }
    
  return (
    <div className="random">
      Random value between {min} and {max}: {calcRandom()}
    </div>
  )
}
