import React, { useState, useEffect } from 'react';
import '../assets/admin.css';

function AdminPedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const todosPedidos = JSON.parse(localStorage.getItem('historico_pedidos') || "[]");
        setPedidos(todosPedidos.sort((a, b) => b.id - a.id));
    }, []);

    const alterarStatus = (pedidoId, novoStatus) => {
        const novosPedidos = pedidos.map(p => 
            p.id === pedidoId ? { ...p, status: novoStatus } : p
        );
        
        setPedidos(novosPedidos);
        localStorage.setItem('historico_pedidos', JSON.stringify(novosPedidos));
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Painel de Controle - FutDelícia</h1>
                <p>Gerencie as ordens de serviço e escale as entregas.</p>
            </header>

            <div className="pedidos-grid">
                {pedidos.length === 0 ? (
                    <p>Nenhum pedido recebido ainda. O estádio está vazio!</p>
                ) : (
                    pedidos.map(pedido => (
                        <div key={pedido.id} className={`pedido-card ${pedido.status.toLowerCase().replace(/ /g, '-')}`}>
                            <div className="pedido-info">
                                <h3>Pedido #{pedido.id.toString().slice(-6)}</h3>
                                <p><strong>Cliente:</strong> {pedido.usuario}</p>
                                <p><strong>Data:</strong> {pedido.data}</p>
                                <ul className="itens-lista">
                                    {pedido.itens.map(item => (
                                        <li key={item.id}>{item.qtd}x {item.nome}</li>
                                    ))}
                                </ul>
                                <p className="total-admin">Total: R$ {pedido.total.toFixed(2).replace('.', ',')}</p>
                            </div>

                            <div className="pedido-acoes">
                                <span>Status Atual: <strong>{pedido.status}</strong></span>
                                <div className="btn-group">
                                    <button onClick={() => alterarStatus(pedido.id, 'Preparando')} className="btn-preparar">Cozinha</button>
                                    <button onClick={() => alterarStatus(pedido.id, 'Saiu para entrega')} className="btn-entrega">Entregar</button>
                                    <button onClick={() => alterarStatus(pedido.id, 'Entregue')} className="btn-concluir">Finalizar</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AdminPedidos;