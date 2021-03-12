import React, { useState } from 'react'

function Contoh({sendValue}) {
  console.log(sendValue);
  const [value, setValue] = useState('risano akbar')
  const handleSend=()=>{
    sendValue('bla bla')
  }
  return (
    <div>
      <button onClick={handleSend}>contoh pengiriman data</button>
    </div>
  )
}

export default Contoh
