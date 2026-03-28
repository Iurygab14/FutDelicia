import React, { useState } from 'react';
import '../assets/saibaMais.css';
import { Link } from 'react-router-dom';

function DocumentosLegais() {
    const [abaAtiva, setAbaAtiva] = useState('Termos');

    return (
        <div className="institucional-container">
            <header className="institucional-header">
                <h1>Transparência no Campo</h1>
                <p className="subtitle">Regras de jogo claras para uma experiência nota 10.</p>
                
                <div className="about-nav" style={{ marginTop: '20px' }}>
                    <button 
                        className={abaAtiva === 'Termos' ? 'active' : ''} 
                        onClick={() => setAbaAtiva('Termos')}
                    >
                        Termos de Uso
                    </button>
                    <button 
                        className={abaAtiva === 'Privacidade' ? 'active' : ''} 
                        onClick={() => setAbaAtiva('Privacidade')}
                    >
                        Privacidade
                    </button>
                </div>
            </header>

            <div className="institucional-content">
                {abaAtiva === 'Termos' ? (
                    <section>
                        <h3>1. Aceite dos Termos</h3>
                        <p>Ao acessar o FutDelícia, você concorda em seguir as regras deste estádio virtual. Como estudantes que valorizam o "fair play", esperamos que você utilize nossa plataforma de forma honesta.</p>
                        
                        <h3>2. Pedidos e Entregas</h3>
                        <p>Nossa missão é entregar seu lanche antes do apito final. Certifique-se de que o endereço de entrega está correto para não tomarmos um "cartão vermelho" da logística.</p>
                        
                        <div className="highlight-box">
                            <strong>Nota dos Desenvolvedores:</strong> Este app foi criado por universitários apaixonados por futebol para facilitar sua torcida. O uso indevido da plataforma resultará em banimento da nossa escalação.
                        </div>
                    </section>
                ) : (
                    <section>
                        <h3>1. Coleta de Dados</h3>
                        <p>Coletamos apenas o essencial: seu nome (para a escalação), seu endereço (o campo de jogo) e suas preferências de lanche. Não vendemos seus dados para "times rivais".</p>
                        
                        <h3>2. Segurança</h3>
                        <p>Como bons zagueiros, protegemos suas informações com criptografia de ponta a ponta. Seus dados estão mais seguros do que o gol em dia de final de campeonato.</p>
                        
                        <h3>3. Cookies</h3>
                        <p>Usamos cookies apenas para lembrar que você prefere aquele Burger Galo Forte, facilitando seu próximo pedido.</p>
                    </section>
                )}
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link to="/" className="btn-voltar">Voltar para a Tela Inicial</Link>
            </div>
        </div>
    );
}

export default DocumentosLegais;