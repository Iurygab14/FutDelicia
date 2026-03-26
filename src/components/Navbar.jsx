import { Link } from "react-router-dom";
import "../assets/navbar.css"
import logoFutdelicia from "../imgs/futdeliciaLogo.png";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logoFutdelicia} alt="FutDelícia Logo" />
                <span>FutDelícia</span>
            </div>
            <div className="navbar-links">
                <Link to="/Home" className="nav-link active">Início</Link>
                <Link to="/Cardapio" className="nav-link">Explorar Cardápio</Link>
                <Link to="/Ofertas" className="nav-link">Ofertas Especiais</Link>
                <Link to="/AcompanharPedido" className="nav-link">Acompanhar Pedido</Link>
                <Link to="/Suporte" className="nav-link">Suporte</Link>
            </div>
            <div className="navbar-user">
                <button className="btn-login">Login/Cadastrar</button>
            </div>
        </nav>
    );
}

export default Navbar