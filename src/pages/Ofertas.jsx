import "C:/Users/Windows 11/futdelicia/src/assets/headerOfertas.css";
import ListaProdutos from '../components/listaProdutos';
import React, { useEffect, useState } from 'react';

function Ofertas() {
  const [usuario, setUsuario] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todosProdutos, setTodosProdutos] = useState([]);
  const [novaOferta, setNovaOferta] = useState({ idLanche: '', precoPromo: '' });
  const [busca, setBusca] = useState("");
  const categorias = [
    "Ofertas", "Hambúrgueres", "Batatas fritas", 
    "Lanches", "Saladas", "Bebidas", "Sobremesas", "Molhos", "Massas", "Pizzas", "Cafés da Manhã", "Sopas"
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usuario_logado'));
    setUsuario(user);

    const cardapio = JSON.parse(localStorage.getItem('cardapio_futdelicia') || "[]");
    setTodosProdutos(cardapio);
  }, []);

  const salvarOferta = (e) => {
    e.preventDefault();
    const cardapioAtual = [...todosProdutos];
    
    const index = cardapioAtual.findIndex(p => p.id === Number(novaOferta.idLanche));
    
    if (index !== -1) {
      cardapioAtual[index].precoPromo = novaOferta.precoPromo;
      
      setTodosProdutos(cardapioAtual);
      localStorage.setItem('cardapio_futdelicia', JSON.stringify(cardapioAtual));
      
      setIsModalOpen(false);
      setNovaOferta({ idLanche: '', precoPromo: '' });
      
      window.location.reload(); 
    }
  };

  const lanchesDisponiveis = todosProdutos.filter(p => !p.precoPromo);

  return (
    <div>
      <header className="header-ofertas">
        <div className="top-section">
          <h1 className="page-title">Todas as ofertas do FutDelícia</h1>
          
          {/* NOVA OFERTA */}
          {usuario?.role === 'adm' && (
            <button className="btn-add-oferta" onClick={() => setIsModalOpen(true)}>
              + Escalar Oferta
            </button>
          )}
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Buscar no cardápio..." 
                        value={busca} 
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>
            </div>

        {/* NAVBAR */}
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

        <ListaProdutos filtro={busca} />

      {/* NOVA OFERTA FORM */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Nova Oferta do Dia ⚽</h2>
            <form onSubmit={salvarOferta}>
              <label>Escolha o Lanche:</label>
              <select 
                value={novaOferta.idLanche} 
                onChange={e => setNovaOferta({...novaOferta, idLanche: e.target.value})}
                required
              >
                <option value="">Selecione um craque...</option>
                {lanchesDisponiveis.map(l => (
                  <option key={l.id} value={l.id}>{l.nome} ({l.precoOriginal})</option>
                ))}
              </select>

              <label>Preço Promocional:</label>
              <input 
                type="text" 
                placeholder="Ex: R$ 15,00" 
                value={novaOferta.precoPromo}
                onChange={e => {
                  const valor = e.target.value;
                        if (valor === "" || Number(valor) >= 0) {
                          setFormData({...formData, precoPromo: valor});
                        }
                      }
                    }
                required
              />

              <div className="modal-btns">
                <button type="submit" className="btn-save">Ativar Oferta</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ofertas;
