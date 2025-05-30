import React, { useState } from 'react'
import './AnoBissexto.css'
function AnoBissexto() {
    const [resultado, setResultado] = useState('Resultado não calculado)')
    function lerAno(){
        let ano = Number(prompt("digite um ano)"))
        if(ano % 4 == 0){
            setResultado("É bissexto")
        }else{
            setResultado("Não é bissexto")
        }
}

return (
    <div className='container-anoBissexto'>
       <h2>AnoBissexto</h2> 

       <button onClick={lerAno}>Informar ano</button>
       <p>
       {resultado}
       </p>
    </div>
  )
}

export default AnoBissexto
