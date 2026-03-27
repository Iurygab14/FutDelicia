import "C:/Users/Windows 11/futdelicia/src/assets/headerOfertas.css";
import { FaSearch } from 'react-icons/fa';
import ListaProdutos from './listaProdutos';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Ofertas() {
  const categorias = [
    "Ofertas", "Hambúrgueres", "Batatas fritas", 
    "Lanches", "Saladas", "Bebidas", "Sobremesas", "Molhos", "Massas", "Pizzas", "Cafés da Manhã", "Sopas"
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
        <header className="header-ofertas">
        {/* Título e Busca */}
        <div className="top-section">
            <h1 className="page-title">Todas as ofertas do FutDelícia</h1>
            <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Buscar no cardápio..." />
            </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="category-nav">
            <ul className="category-list">
            {categorias.map((cat, index) => {
                const targetId = cat.toLowerCase().replace(/\s+/g, '-');
                
                return (
                    <li key={index} className={cat === "Ofertas" ? "active" : ""}>
                        <a href={`#${targetId}`}>{cat}</a>
                    </li>
                );
            })}
            </ul>
        </nav>
        </header>

        <ListaProdutos/>
    </div>
  );
}

export default Ofertas;
