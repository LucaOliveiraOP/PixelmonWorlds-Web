import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";
import "./App.css";
import clickSound from "./assets/pokeball.mp3";

function App() {
  const [soundPlayed, setSoundPlayed] = useState(false);
  const navigate = useNavigate();

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.15;
    audio.play();
    setSoundPlayed(true);
  };

  useEffect(() => {
    if (soundPlayed) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [soundPlayed, navigate]);

  return (
    <div className="App">
      <div>
        <a></a>
        <a>
          <img
            src={Logo}
            className="logo pixelmon"
            alt="logo pixelmon"
            onClick={playSound}
          />
        </a>
      </div>
      <h1>Bem vindo ao Pixelmon Worlds!</h1>
      <p className="read">Clique na pokébola para continuar</p>
    </div>
  );
}

export default App;
