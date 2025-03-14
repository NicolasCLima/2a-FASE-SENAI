import React, { useState } from 'react'
import './ProjetoPomar.css'


function ProjetoPomar() {
    const [resultado, setResultado] = useState('Ainda não fez compras')
    const [maca, setMaca] = useState(0)
    const [laranja, setLaranja] = useState(0)
    const [bergamota, setBergamota] = useState(0)
    const [banana, setBanana] = useState(0)
    const [pera, setPera] = useState(0)
    function listaDeCompras(){
        setMaca (Number(prompt('Digite quantas maçãs')))
        setLaranja (Number(prompt('Digite quantas laranjas')))
        setBergamota (Number(prompt('Digite quantas bergas')))
        setBanana (Number(prompt('Digite quantas bananas')))
        setPera (Number(prompt('Digite quantas peras')))

    }
    return (
    <div className='container-projetoPomar'>
      <button onClick={listaDeCompras}>Caixa Trajeto Pomar</button>
      <p>
        Lista de compras:<br /> ${maca} x maçãs(R$1,50) = ${maca*1.5} /p <br /> ${laranja} x laranjas(R$2,50) = ${laranja*2.50}<br /> ${bergamota} x bergas(R$1,00) = ${bergamota}<br /> ${banana} x bananas(R$1.20) = ${banana*1.2}<br /> ${pera} x peras(R$0,50) = ${pera*0.5}<br /> TOTAL = R$ ${maca*1.5 + laranja*2 + bergamota + banana*1.2 + pera*0.5}
        {resultado}
      </p>
    </div>
  )
}

export default ProjetoPomar
