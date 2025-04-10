import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Frontend from './components/Frontend';
import Backend from './components/Backend';
import Estudante from './components/Estudante';
import Programador from './components/Programador';
import Fullstack from './components/Fullstack';
function App() {


  return (
    <>
      <div className='container-app'>
      <h1>ORAÇÕES DEVS</h1>
      <Frontend />
      <Backend />
      <Estudante />
      <Programador />
      <Fullstack />
      </div>
   
    </>
  )
}

export default App
