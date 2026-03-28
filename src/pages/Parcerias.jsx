import React from 'react';
import "../assets/saibaMais.css"
import { Link } from 'react-router-dom';

function Parcerias() {
    return (
        <div className="institucional-container">
            <div className="institucional-header">
                <h1>Seja um Parceiro</h1>
                <div className='institucional-content'>
                <p className="subtitle">Entre para a nossa seleção!</p>
                <a className='parc-a' href="https://docs.google.com/forms/u/0/">Formulário</a>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link to="/" className="btn-voltar">Voltar para a Tela Inicial</Link>
            </div>
        </div>
    );
}

export default Parcerias;