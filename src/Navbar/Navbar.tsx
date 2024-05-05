import { Link } from "react-router-dom";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import "./nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo1} alt="Logo 1" className="nav logo1" />
        <img src={Logo2} alt="Logo 2" className="nav logo2" />
      </div>
      <ul>
        <li>
          <Link to="/home">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre nós</Link>
        </li>
        <li>
          <Link to="/store">Loja Oficial</Link>
        </li>
        <li>
          <Link to="/store">Como jogar?</Link>
        </li>
        <li>
          <Link to="/store">Downloads</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
