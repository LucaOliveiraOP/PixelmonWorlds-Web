import React from "react";
import Navbar from "../Navbar/Navbar";
import Configbar from "../Configbar/Configbar";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Pikachu from "../assets/pikachu.gif";

const Home: React.FC = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={Pikachu} alt="pikachu" className="nav pikachu" />
        <img src={Logo1} alt="Logo 1" className="nav logo1" />
        <img src={Logo2} alt="Logo 2" className="nav logo2" />
      </div>
      <Navbar />
      <Configbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
