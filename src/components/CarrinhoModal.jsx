import React, { useState } from 'react';
import { useCart } from '../context/CarrinhoContext';
import '../assets/carrinho.css';
import { useNavigate } from 'react-router-dom';

function CarrinhoModal({ isOpen, onClose }) {
    const { cart, addToCart, removeFromCart, totalCarrinho, clearCart } = useCart();
    const navigate = useNavigate();
    
    const [etapaEndereco, setEtapaEndereco] = useState(false);
    const [endereco, setEndereco] = useState({ rua: '', numero: '', bairro: '' });

    const handleFinalizar = () => {
        const logado = localStorage.getItem('usuario_logado');

        if (!logado) {
            alert("Você precisa estar logado para finalizar o pedido!");
            navigate('/Login');
            onClose();
            return;
        }

        if (!etapaEndereco) {
            setEtapaEndereco(true);
            return;
        }

        if (!endereco.rua || !endereco.numero || !endereco.bairro) {
            alert("Por favor, preencha o campo de jogo (endereço)!");
            return;
        }

        const usuarioData = JSON.parse(logado);
        const pedidosAntigos = JSON.parse(localStorage.getItem('historico_pedidos') || "[]");

        const pedidoFinal = {
            id: Date.now(),
            usuario: usuarioData.nome,
            itens: cart,
            total: totalCarrinho,
            status: "Preparando",
            endereco: `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}`, 
            data: new Date().toLocaleString()
        };

        localStorage.setItem('historico_pedidos', JSON.stringify([...pedidosAntigos, pedidoFinal]));
        
        clearCart(); 
        setEtapaEndereco(false); 
        onClose();
        navigate('/AcompanharPedido');
    };

    return (
        <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>{etapaEndereco ? "Onde entregamos?" : "Meu Carrinho"}</h2>
                    <button className="close-btn" onClick={() => { onClose(); setEtapaEndereco(false); }}>&times;</button>
                </div>

                <div className="cart-items">
                    {!etapaEndereco ? (
                        /* ITENS DO CARRINHO */
                        cart.length === 0 ? (
                            <p className="empty-msg">Seu carrinho está vazio... 🍔</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.img} alt={item.nome} />
                                    <div className="item-details">
                                        <h4>{item.nome}</h4>
                                        <div className="quantity-controls">
                                            <button onClick={() => removeFromCart(item.id)}>-</button>
                                            <span>{item.qtd}</span>
                                            <button onClick={() => addToCart(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    ) : (
                        /* FORMULÁRIO DE ENDEREÇO */
                        <div className="address-form">
                            <input 
                                type="text" 
                                placeholder="Rua / Avenida" 
                                value={endereco.rua}
                                required
                                onChange={(e) => setEndereco({...endereco, rua: e.target.value})}
                            />
                            <input 
                                type="text" 
                                placeholder="Nº" 
                                value={endereco.numero}
                                required
                                onChange={(e) => setEndereco({...endereco, numero: e.target.value})}
                            />
                            <input 
                                type="text" 
                                placeholder="Bairro" 
                                value={endereco.bairro}
                                required
                                onChange={(e) => setEndereco({...endereco, bairro: e.target.value})}
                            />
                            <button className="back-btn" onClick={() => setEtapaEndereco(false)}>Voltar aos lanches</button>
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total">
                            <span>Total:</span>
                            <span className="total-value">R$ {totalCarrinho.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <button className="checkout-btn" onClick={handleFinalizar}>
                            {etapaEndereco ? "Confirmar e Pagar" : "Finalizar Pedido"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CarrinhoModal;