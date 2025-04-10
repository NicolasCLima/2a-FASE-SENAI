import React, { useState } from 'react'

function Backend() {
    const [oracao, setOracao] = useState(' ');

    const backend = () => {
      setOracao('Nosso código que está no servidor,
      Santificado seja o teu endpoint,
      Venha a nós o teu JSON,
      Seja feita tua lógica,
      Assim na API como no banco.
      O token nosso de cada dia nos dai hoje,
      Perdoai nossas queries mal otimizadas,
      Assim como nós perdoamos quem nos envia POST sem body.
      E não nos deixes cair em loops infinitos,
      Mas livrai-nos do downtime.
      Amém, amém, status 200.')
    }  









    return (
      <button onClick={backend}>Oração do Backend</button>
    )
  }

  export default Backend