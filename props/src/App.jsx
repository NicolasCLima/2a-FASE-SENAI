import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function testar(){
  console.log(produtos);
}

function App() {
  const [produtos, setProdutos] = useState([
  {
    modelo: "Melancia",
    preco: 22
  }, 
  {
    modelo: "Pneu",
    preco: 220
  },
  {
    modelo: "Garrafa",
    preco: 10
  },
  {
    modelo: "notebook",
    preco: 6000
  },
  {
    modelo: "desktop",
    preco: 5000
  }
])

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={815} />
      <Produto modelo={"Smart TV WIFI BLuetooth e os krl"} preco={971} />
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      
      <button onClick={testar}>TESTAR</button>

      {produtos.map((p) => (
        <Produto modelo= {p.modelo} preco={p.preco} />
      ))}
    </div>

  )

}

export default App
