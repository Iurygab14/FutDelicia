import React from 'react';
import "../assets/saibaMais.css"
import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className="institucional-container">
            <div className="institucional-header">
                <h1>Nossa História</h1>
            </div>
            <div className="institucional-content">
                <p>O FutDelícia é o lugar onde o sabor entra em campo!</p>
                <p>    
                    Tudo começou em uma quarta-feira no RU (Restaurante Universitário). Éramos cinco amigos fanáticos por futebol no horário do almoço. Discutíamos sobre o projeto que faríamos de Interface do Usuário, projeto esse que também seria usado na disciplina de Projeto Avançado de Software futuramente, apesar do grupo ser composto por apenas três dos cinco que estavam na mesa. Após muitas ideias serem jogadas na mesa, incluindo ideias que beiravam o absurdo, surgiu então, a ideia que uniria o momento que compartilhavamos naquela hora no R.U. com algo que amavamos, o futebol.
                </p>
                <p>
                    Decidimos unir o útil ao agradável: a precisão de uma comida bem gostosa com o sabor de um gol nos acréscimos. Assim nasceu o FutDelícia. Criado por estudantes para quem entende que bater um bolão na cozinha é tão importante quanto ganhar o clássico de domingo. Nossos lanches não são apenas comida; são o combustível para a sua torcida.
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link to="/" className="btn-voltar">Voltar para a Tela Inicial</Link>
            </div>
        </div>
    );
}

export default Sobre;
