import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a>
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={Logo} className="logo pixelmon" alt="logo pixelmon" />
        </a>
      </div>
      <h1>Bem vindo ao Pixelmon Worlds!</h1>
      <p className="read">
        Clique na pokébola para continuar
      </p>
    </div>
  )
}

export default App
