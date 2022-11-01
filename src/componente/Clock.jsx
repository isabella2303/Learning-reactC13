import React from 'react'
import './Clock.css'

const Clock = () => {
  return (
      <div>
    <h1>Hola mundo</h1>
    <h2>Es hora de dormir
        {
            new Date().toLocaleTimeString()
        }
    </h2>
  
  </div>
  )
}

export default Clock


