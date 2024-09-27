import { Link } from "react-router-dom";
import "./nav.css";
import Pikachu from "../../assets/pikachu.gif";
import Logo1 from "../../assets/logo4.png";
import Logo2 from "../../assets/logo3.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
      <img src={Pikachu} alt="Pikachu" className="nav pikachu" />
        <img src={Logo1} alt="Logo 1" className="nav logo1" />
        <img src={Logo2} alt="Logo 2" className="nav logo2" />
        <ul>
          <li>
            <Link to="/home">Início</Link>
          </li>
          <li>
            <Link to="/about">JOGAR</Link>
          </li>
          <li>
            <Link to="/store">Loja Oficial</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
