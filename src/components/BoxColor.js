import React from 'react'

export default function BoxColor({r, g, b}) {

  const string = `rgb(${r},${g},${b})`;

  return (
    <div className='box-color-div' style={{backgroundColor: string, border: "1px solid black", padding: 50, marginBottom: 10, width: 500}}>
    rgb({r},{g},{b})
    </div>
  )
}
