import React from 'react'
import VentixeLogo from '../images/VentixeLogo.svg'

const Logotype = () => {
  return (
    <>
      <div className="logotype"> 
      <img src={VentixeLogo} alt="Ventixe logotype" />
      <h2>Ventixe</h2>
      </div>

      <div className="logotype-mobile"> 
      <img src={VentixeLogo} alt="Ventixe logotype" />
      </div>
    </>
  )
}

export default Logotype