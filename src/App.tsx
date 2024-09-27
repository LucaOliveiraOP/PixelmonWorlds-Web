import Login from "./Components/Login/Login";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
      <h1>Bem vindo ao Pixelmon Worlds!</h1>
      <Login />
      </div>
      <p className="read">Após preencher, clique na pokebola para continuar</p>
    </div>
  );
}

export default App;
