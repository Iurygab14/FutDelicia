import { produtos } from '../data/produtos';
import { FaSearch } from 'react-icons/fa';
import '../assets/cardapio.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CarrinhoContext';

function Cardapio() {
  const [itensCardapio, setItensCardapio] = useState([]);
  const [usuario, setUsuario] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editandoItem, setEditandoItem] = useState(null); 
  const [formData, setFormData] = useState({ nome: '', desc: '', precoOriginal: '', categoria: '', img: '' });

  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [busca, setBusca] = useState("");
  const location = useLocation();
  const { addToCart } = useCart();

  useEffect(() => {
    const dadosUsuario = localStorage.getItem('usuario_logado');
    if (dadosUsuario) setUsuario(JSON.parse(dadosUsuario));

    const cardapioSalvo = localStorage.getItem('cardapio_futdelicia');
    if (cardapioSalvo) {
      setItensCardapio(JSON.parse(cardapioSalvo));
    } else {
      setItensCardapio(produtos); 
      localStorage.setItem('cardapio_futdelicia', JSON.stringify(produtos));
    }
  }, []);

  const salvarLanche = (e) => {
    e.preventDefault();
    let novoCardapio;
    
    if (editandoItem) {
      novoCardapio = itensCardapio.map(p => p.id === editandoItem.id ? { ...formData, id: p.id } : p);
    } else {
      const novoLanche = { ...formData, id: Date.now() };
      novoCardapio = [...itensCardapio, novoLanche];
    }

    setItensCardapio(novoCardapio);
    localStorage.setItem('cardapio_futdelicia', JSON.stringify(novoCardapio));
    fecharModal();
  };

  const excluirLanche = (id) => {
    if (window.confirm("Deseja mesmo tirar esse craque do time?")) {
      const novoCardapio = itensCardapio.filter(p => p.id !== id);
      setItensCardapio(novoCardapio);
      localStorage.setItem('cardapio_futdelicia', JSON.stringify(novoCardapio));
    }
  };

  const abrirModalParaEditar = (produto) => {
    setEditandoItem(produto);
    setFormData(produto);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setEditandoItem(null);
    setFormData({ nome: '', desc: '', precoOriginal: '', categoria: '', img: '' });
  };

  const categoriasAtt = ["todos", ...new Set(itensCardapio.map(p => p.categoria))];
  const produtosFiltrados = itensCardapio.filter(produto => {
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
        
        {/* NOVO LANCHE*/}
        {usuario?.role === 'adm' && (
            <button className="btn-novo-lanche" onClick={() => setIsModalOpen(true)}>
                + Novo Lanche 
            </button>
        )}
        
        {/* BARRA DE PESQUISA E FILTRO */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="O que você quer comer hoje?" 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
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

      {/* LISTA DE PRODUTOS */}
      <div className="produtos-grid">
        {produtosFiltrados.map(produto => (
          <div className="produto-card" key={produto.id}>
            {/* OPÇÕES ADMIN */}
            {usuario?.role === 'adm' && (
                <div className="adm-card-actions">
                    <button onClick={() => abrirModalParaEditar(produto)}>Editar</button>
                    <button onClick={() => excluirLanche(produto.id)} className="btn-del">Excluir</button>
                </div>
            )}

            <div className="produto-detalhes">
              <h3>{produto.nome}</h3>
              <p>{produto.desc}</p>
              <span className={produto.precoPromo ? "preco-verde" : "preco-preto"}>
                {produto.precoPromo || produto.precoOriginal}
              </span>
            </div>
            
            <div className="produto-img-box">
              <img src={produto.img} alt={produto.nome} />
              <button className="add-btn" onClick={() => addToCart(produto)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* FORMULÁRIO */}
      {isModalOpen && (
          <div className="modal-overlay">
              <div className="modal-content">
                  <h2>{editandoItem ? "Editar Lanche" : "Cadastrar Novo Craque"}</h2>
                  <form onSubmit={salvarLanche}>
                      <input type="text" placeholder="Nome do Lanche" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} required />
                      <input type="text" placeholder="Descrição" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} required />
                      <input type="text" placeholder="Preço (Ex: R$ 25,90)" value={formData.precoOriginal} onChange={e => {
                        const valor = e.target.value;
                        if (valor === "" || Number(valor) >= 0) {
                          setFormData({...formData, precoOriginal: valor});
                        }
                      }} required />
                      <input type="text" placeholder="Categoria" value={formData.categoria} onChange={e => setFormData({...formData, categoria: e.target.value})} required />
                      <input type="text" placeholder="URL da Imagem" value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} required />
                      
                      <div className="modal-btns">
                          <button type="submit" className="btn-save">Salvar</button>
                          <button type="button" onClick={fecharModal} className="btn-cancel">Cancelar</button>
                      </div>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
}

export default Cardapio;