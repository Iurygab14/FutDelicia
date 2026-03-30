import React, { useState } from 'react';
import "../assets/suporte.css";
import { FaWhatsapp, FaEnvelope, FaHeadset, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Suporte() {
    const [faqAtivo, setFaqAtivo] = useState(null);

    const perguntas = [
        { id: 1, p: "Como acompanho meu pedido?", r: "Após finalizar a compra, você pode ver o status em tempo real na aba 'Acompanhar Pedido'. Nosso VAR (Vídeo de Acompanhamento Real) te avisa quando o entregador sair!" },
        { id: 2, p: "Quais as formas de pagamento?", r: "Aceitamos Cartões de Crédito, Débito e PIX. Não aceitamos cartões vermelhos, apenas pagamentos dentro das quatro linhas!" },
        { id: 3, p: "Meu pedido veio errado, e agora?", r: "Fique tranquilo! Entre em contato imediato pelo nosso WhatsApp de suporte. Vamos analisar o lance e fazer a substituição sem custo." },
        { id: 4, p: "Qual o tempo médio de entrega?", r: "Geralmente entregamos em 30 minutos para seu pedido chegar ainda no primeiro tempo! Em dias de clássico, o tempo pode variar um pouco." }
    ];

    const toggleFaq = (id) => {
        setFaqAtivo(faqAtivo === id ? null : id);
    };

    const abrirWhatsapp = () => {
        const numero = "5583999790592";
        const mensagem = encodeURIComponent("Olá, FutDelícia! Preciso de um suporte com meu pedido.");
        window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
    };

    return (
        <main className="suporte-container">
            <header className="suporte-header">
                <h1>Central de Atendimento FutDelícia</h1>
                <p>Precisa de um auxílio do VAR? Nossa equipe está pronta para entrar em campo.</p>
            </header>

            {/* CONTATOS */}
            <section className="contato-cards">
                <div className="card-item-suporte">
                    <FaWhatsapp className="icon-suporte" />
                    <h3>WhatsApp</h3>
                    <p>Resposta rápida para problemas com pedidos.</p>
                    <button className="btn-contato" onClick={abrirWhatsapp}>Chamar no Zap</button>
                </div>
                <div className="card-item-suporte">
                    <FaEnvelope className="icon-suporte" />
                    <h3>E-mail</h3>
                    <p>Sugestões, parcerias ou reclamações formais.</p>
                    <a href="mailto:suportefutdelicia@gmail.com?subject=Ajuda com Pedido" className="btn-contato">Enviar E-mail</a>
                </div>
                <div className="card-item-suporte">
                    <FaHeadset className="icon-suporte" />
                    <h3>Ouvidoria</h3>
                    <p>Atendimento especializado de segunda a sábado.</p>
                    <a href="tel:83991913326" className="btn-contato">Ligar Agora</a>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section-suporte">
                <h2>Dúvidas Frequentes</h2>
                <div className="faq-list-suporte">
                    {perguntas.map((item) => (
                        <div key={item.id} className={`faq-item-suporte ${faqAtivo === item.id ? 'active' : ''}`} onClick={() => toggleFaq(item.id)}>
                            <div className="faq-pergunta-suporte">
                                <span>{item.p}</span>
                                {faqAtivo === item.id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {faqAtivo === item.id && <div className="faq-resposta-suporte">{item.r}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Suporte;
