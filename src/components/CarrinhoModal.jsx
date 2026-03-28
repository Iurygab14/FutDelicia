import React from 'react';
import { useCart } from '../context/CarrinhoContext';
import '../assets/carrinho.css';
import { useNavigate } from 'react-router-dom';

function CarrinhoModal({ isOpen, onClose }) {
    const { cart, addToCart, removeFromCart, totalCarrinho, clearCart } = useCart();
    const navigate = useNavigate();

    const handleFinalizar = () => {
        const logado = localStorage.getItem('usuario_logado');

        if (!logado) {
            alert("Você precisa estar logado para finalizar o pedido!");
            navigate('/Login');
            onClose();
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
            data: new Date().toLocaleString()
        };

        localStorage.setItem('historico_pedidos', JSON.stringify([...pedidosAntigos, pedidoFinal]));
        
        clearCart(); 
        onClose();
        alert(`Pedido realizado com sucesso, ${usuarioData.nome}!`);
    };

    return (
        <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Meu Carrinho</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p className="empty-msg">Seu carrinho está vazio... 🍔</p>
                    ) : (
                        cart.map(item => {
                            const precoTexto = item.precoPromo || item.precoOriginal;
                            const precoLimpo = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim());

                            return (
                                <div key={item.id} className="cart-item">
                                    <img src={item.img} alt={item.nome} />
                                    <div className="item-details">
                                        <h4>{item.nome}</h4>
                                        <span className="item-price">
                                            {precoLimpo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </span>
                                        
                                        <div className="quantity-controls">
                                            <button onClick={() => removeFromCart(item.id)}>-</button>
                                            <span>{item.qtd}</span>
                                            <button onClick={() => addToCart(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total">
                            <span>Total:</span>
                            <span className="total-value">
                                R$ {totalCarrinho.toFixed(2).replace('.', ',')}
                            </span>
                        </div>
                        <button className="checkout-btn" onClick={handleFinalizar}>
                            Finalizar Pedido
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CarrinhoModal;