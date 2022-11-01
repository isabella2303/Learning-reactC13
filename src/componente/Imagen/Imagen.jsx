import React from 'react'
import './Imagen.css'

const Imagen = ({url}) => {
  return (
    <div>
      <img className='imagen'src={url} alt=""/>
    </div>
  )
}

export default Imagen
