import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/acompanharPedido.css';

function AcompanharPedido() {
    const [ultimoPedido, setUltimoPedido] = useState(null);
    const navigate = useNavigate();

    const getStatusWeight = (status) => {
        const weights = {
            'Confirmado': 1,
            'Preparando': 2,
            'Saiu para entrega': 3,
            'Entregue': 4
        };
        return weights[status] || 1;
    };

    useEffect(() => {
        const logado = localStorage.getItem('usuario_logado');
        if (!logado) {
            navigate('/Login');
            return;
        }

        const usuario = JSON.parse(logado);
        
        const buscarPedido = () => {
            const historico = JSON.parse(localStorage.getItem('historico_pedidos') || "[]");
            const pedidoEncontrado = historico
                .filter(p => p.usuario === usuario.nome)
                .sort((a, b) => b.id - a.id)[0];
            setUltimoPedido(pedidoEncontrado);
        };

        buscarPedido();
        
        const intervalo = setInterval(buscarPedido, 3000);
        return () => clearInterval(intervalo);
        
    }, [navigate]);

    if (!ultimoPedido) {
        return (
            <div className="status-container">
                <h2 style={{marginTop: '150px'}}>Buscando sua escalação... ⚽</h2>
                <p>Se demorar, verifique se você já fez um pedido!</p>
            </div>
        );
    }

    const currentWeight = getStatusWeight(ultimoPedido.status);

    return (
        <div className="status-container">
            <header className="status-header">
                <h1>Acompanhe seu Pedido 🛵</h1>
                <span>ID do Pedido: #{ultimoPedido.id.toString().slice(-6)}</span>
            </header>

            <div className="timeline">
                <div className={`step ${currentWeight > 1 ? 'done' : 'active'}`}>
                    <div className="circle">1</div>
                    <p>Confirmado</p>
                </div>

                <div className={`step ${currentWeight > 2 ? 'done' : currentWeight === 2 ? 'active' : ''}`}>
                    <div className="circle">2</div>
                    <p>Na Cozinha</p>
                </div>

                <div className={`step ${currentWeight > 3 ? 'done' : currentWeight === 3 ? 'active' : ''}`}>
                    <div className="circle">3</div>
                    <p>Em Trânsito</p>
                </div>

                <div className={`step ${currentWeight === 4 ? 'done' : ''}`}>
                    <div className="circle">4</div>
                    <p>Gol! (Entregue)</p>
                </div>
            </div>

            <div className="resumo-pedido">
                <h3>Resumo da Escalação:</h3>
                <ul>
                    {ultimoPedido.itens.map(item => (
                        <li key={item.id}>{item.qtd}x {item.nome}</li>
                    ))}
                </ul>
                <div className="total-destaque">
                    Total: R$ {ultimoPedido.total.toFixed(2).replace('.', ',')}
                </div>
            </div>
        </div>
    );
}

export default AcompanharPedido;