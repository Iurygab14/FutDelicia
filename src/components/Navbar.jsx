import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../assets/navbar.css";
import logoFutdelicia from "../imgs/futdeliciaLogo.png";
import { useCart } from '../context/CarrinhoContext';
import CarrinhoModal from './CarrinhoModal';

function Navbar() {
    const [usuario, setUsuario] = useState(null);
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();
    const { cart } = useCart();
    const totalItens = cart.reduce((acc, item) => acc + item.qtd, 0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const dadosUsuario = localStorage.getItem('usuario_logado');
        if (dadosUsuario) {
            setUsuario(JSON.parse(dadosUsuario));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('usuario_logado'); 
        setUsuario(null);
        setMenuAberto(false);
        window.location.href = "/"; 
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
                        <img src={logoFutdelicia} alt="FutDelícia Logo" />
                        <span>FutDelícia</span>
                    </Link>
                </div>

                <div className="navbar-links">
                    <Link to="/Home" className="nav-link">Início</Link>
                    <Link to="/Cardapio" className="nav-link">Explorar Cardápio</Link>
                    <Link to="/Ofertas" className="nav-link">Ofertas Especiais</Link>
                    
                    {/* ACOMPANHAR PEDIDOS/CLIENTE */}
                    {(!usuario || usuario.role === 'cliente') && (
                        <Link to="/AcompanharPedido" className="nav-link">Acompanhar Pedido</Link>
                    )}

                    {/* GERENCIAR PEDIDOS/ADMIN */}
                    {usuario && usuario.role === 'adm' && (
                        <Link to="/AdminPedidos" className="nav-link admin-link">
                            Gerenciar Pedidos
                        </Link>
                    )}

                    <Link to="/Suporte" className="nav-link">Suporte</Link>
                    
                    <div className="cart-icon-container" onClick={() => setIsCartOpen(true)}>
                        <span className="nav-link">Carrinho</span>
                        <span className="cart-badge"> ({totalItens})</span>
                    </div>
                </div>

                <div className="navbar-user">
                    {usuario ? (
                        <div className="user-profile-container">
                            <div 
                                className="user-circle" 
                                onClick={() => setMenuAberto(!menuAberto)}
                                title={usuario.nome}
                                style={usuario.role === 'adm' ? { border: '2px solid #ffd600' } : {}}
                            >
                                {usuario.nome ? usuario.nome.charAt(0).toUpperCase() : 'U'}
                            </div>
                            
                            {menuAberto && (
                                <div className="user-dropdown-menu">
                                    <p className="dropdown-user-name">Olá, {usuario.nome.split(' ')[0]}</p>
                                    {usuario.role === 'adm' && <span className="badge-adm">Administrador</span>}
                                    <hr />
                                    <button onClick={handleLogout} className="dropdown-logout-btn">
                                        Sair da Conta
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/Login" className="btn-login">Login/Cadastrar</Link>
                    )}
                </div>
            </nav>

            <CarrinhoModal
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)} 
            />
        </>
    );
}

export default Navbar;