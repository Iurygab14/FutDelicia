import React, { useState, useEffect } from 'react';
import "../assets/listaProdutos.css";
import { useCart } from "../context/CarrinhoContext";

function ListaProdutos({ filtro }){
    const [produtosData, setProdutosData] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const cardapioSalvo = localStorage.getItem('cardapio_futdelicia');
        if (cardapioSalvo) {
            setProdutosData(JSON.parse(cardapioSalvo));
        }

        const userLogado = localStorage.getItem('usuario_logado');
        if (userLogado) {
            setUsuario(JSON.parse(userLogado));
        }
    }, []);

    const removerDasOfertas = (id) => {
        if (window.confirm("Deseja tirar este craque da aba de ofertas?")) {
            const novoCardapio = produtosData.map(p => {
                if (p.id === id) {
                    const { precoPromo, ...lancheNormal } = p;
                    return { ...lancheNormal, oferta: false };
                }
                return p;
            });

            setProdutosData(novoCardapio);
            localStorage.setItem('cardapio_futdelicia', JSON.stringify(novoCardapio));
        }
    };

    const produtosEmOferta = produtosData.filter(p => 
        (p.precoPromo || p.oferta) && 
        p.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    const categoriasUnicas = [...new Set(produtosEmOferta.map(p => p.categoria))];
    
    return (
        <div className="produtos-container">
            {produtosEmOferta.length === 0 && (
                <div className="no-results">Nenhuma oferta disponível no momento. 🏟️</div>
            )}

            {categoriasUnicas.map(categoria => {
                const produtosDaCategoria = produtosEmOferta.filter(p => p.categoria === categoria);

                return (
                    <section key={categoria} id={categoria.toLowerCase().replace(/\s+/g, '-')} className="secao-categoria">
                        <h2 className="titulo-categoria">
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </h2>

                        <div className="produtos-grid">
                            {produtosDaCategoria.map(produto => (
                                <div className="produto-card" key={produto.id}>
                                    
                                    {/* REMOVER OFERTA */}
                                    {usuario?.role === 'adm' && (
                                        <button 
                                            className="btn-admin-remove-oferta"
                                            onClick={() => removerDasOfertas(produto.id)}
                                        >
                                            ✕ Remover Oferta
                                        </button>
                                    )}

                                    <div className="produto-detalhes">
                                        <h3>{produto.nome}</h3>
                                        <p>{produto.desc}</p>
                                        <div className="preco-container">
                                            {produto.precoPromo && (
                                                <span className="preco-original">{produto.precoOriginal}</span>
                                            )}
                                            
                                            <span className={produto.precoPromo ? "preco-verde" : "preco-preto"}>
                                                {produto.precoPromo || produto.precoOriginal}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="produto-imagem-wrapper">
                                        <img src={produto.img} className="produto-img" alt={produto.nome} />
                                        <button 
                                            className="btn-add-item"
                                            onClick={() => addToCart(produto)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default ListaProdutos;