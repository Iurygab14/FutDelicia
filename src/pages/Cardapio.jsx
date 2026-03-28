import { produtos } from '../data/produtos';
import { FaSearch } from 'react-icons/fa';
import '../assets/cardapio.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CarrinhoContext';

function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [busca, setBusca] = useState("");
  const location = useLocation();
  const categoriasAtt = ["todos", ...new Set(produtos.map(p => p.categoria))];
  const { addToCart } = useCart();

  const produtosFiltrados = produtos.filter(produto => {
    const matchesCategoria = categoriaAtiva === "todos" || produto.categoria === categoriaAtiva;
    const matchesBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
    return matchesCategoria && matchesBusca;
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catFiltro = params.get('categoria');

    if (catFiltro) {
      setCategoriaAtiva(catFiltro);
      
      window.scrollTo(0, 500); 
    }
  }, [location]);

  return (
    <div className="cardapio-container">
      <header className="cardapio-header">
        <h1>Nosso Cardápio</h1>
        
        {/* Barra de Pesquisa */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="O que você quer comer hoje?" 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Filtros de Categoria */}
        <nav className="filtros-nav">
            {categoriasAtt.map(cat => (
            <button 
                key={cat}
                className={`filter-btn ${categoriaAtiva === cat ? 'active' : ''}`}
                onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Grid de Resultados */}
      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map(produto => (
            <div className="produto-card" key={produto.id}>
              <div className="produto-detalhes">
                <h3>{produto.nome}</h3>
                <p>{produto.desc}</p>
                <span className={produto.precoPromo ? "preco-verde" : "preco-preto"}>{produto.precoPromo || produto.precoOriginal}</span>
              </div>
              <div className="produto-img-box">
                <img src={produto.img} alt={produto.nome} />
                <button 
                    className="add-btn"
                    onClick={() => addToCart(produto)}
                >
                  +
                </button>
            </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum lanche encontrado para "{busca}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cardapio;