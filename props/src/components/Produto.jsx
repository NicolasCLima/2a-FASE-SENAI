import React from 'react'
import './Produto.css'

function Produto(props) {
  return (
    <div className='container-produto'>
        <h2>{props.modelo}</h2>
        <p>R${props.preco.toFixed(2)}</p>
    </div>

  )
}

export default Produto