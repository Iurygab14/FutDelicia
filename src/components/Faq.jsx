import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Faq() {
    const navigate = useNavigate();
    const [abaPrincipal, setAbaPrincipal] = useState('faq');
    const [faqAtiva, setFaqAtiva] = useState('funciona');
    
    const conteudosAbas = {
        quemSomos: {
            titulo: "Nossa História",
            texto: "O FutDelícia nasceu da paixão entre futebol e gastronomia. Nossa missão é entregar não apenas comida, mas a experiência de um estádio no conforto da sua casa.",
            extra: "Fundado em 2026, já estamos preparados para ganhar o brasileirão e seu bom gosto.",
            rota: "/sobre" 
        },
        parcerias: {
            titulo: "Seja um Parceiro",
            texto: "Tem um restaurante ou é entregador? Junte-se ao time que mais cresce no Brasil.",
            extra: "Oferecemos as menores taxas do mercado e suporte 24h para nossos parceiros.",
            rota: "../page/parcerias" 
        },
        suporte: {
            titulo: "Central de Ajuda",
            texto: "Precisa de ajuda com um pedido ou pagamento?",
            extra: "Nosso chat está disponível 24/7. Clique no botão de suporte no menu superior.",
            rota: "https://wa.me/83991913326" 
        }
    };

    const handleSaibaMais = () => {
        const destino = conteudosAbas[abaPrincipal].rota;

        if (abaPrincipal === 'suporte' || destino.startsWith('http')) {
            window.open(destino, '_blank');
        } else {
            navigate(destino);
        }
    };
    
    const respostasFaq = {
        funciona: {
          titulo: "Faça um pedido!",
          icone: "🍕",
          texto: "Faça seu pedido pelo nosso site ou aplicativo móvel de forma simples e rápida."
        },
        pagamento: {
          titulo: "Métodos de Pagamento",
          icone: "💳",
          texto: "Aceitamos Cartões de Crédito/Débito, Pix e Vale Refeição (VR/Ticket) diretamente no app."
        },
        tempoReal: {
          titulo: "Acompanhe o progresso",
          icone: "🍔",
          texto: "Você pode acompanhar cada etapa, desde o preparo na cozinha até o entregador na sua rua."
        },
        descontos: {
          titulo: "Promoções Especiais",
          icone: "🎁",
          texto: "Temos cupons diários! Fique de olho na aba 'Ofertas Especiais' para garantir seu desconto."
        },
        regiao: {
          titulo: "Receba seu pedido!",
          icone: "🛵",
          texto: "Entregamos em toda a região metropolitana com uma velocidade relâmpago!"
        }
    };

    return(
        <div>
            <section className="about-us-section">
                <div className="about-header">
                <h2>Saiba mais sobre nós!</h2>
                    <div className="about-nav">
                        <button className={abaPrincipal === 'faq' ? 'active' : ''} onClick={() => setAbaPrincipal('faq')}>Perguntas Frequentes</button>
                        <button className={abaPrincipal === 'quemSomos' ? 'active' : ''} onClick={() => setAbaPrincipal('quemSomos')}>Quem somos?</button>
                        <button className={abaPrincipal === 'parcerias' ? 'active' : ''} onClick={() => setAbaPrincipal('parcerias')}>Parcerias</button>
                        <button className={abaPrincipal === 'suporte' ? 'active' : ''} onClick={() => setAbaPrincipal('suporte')}>Ajuda & Suporte</button>
                    </div>
                </div>

                <div className="about-content-box">
                {abaPrincipal === 'faq' ? (
                    <>
                    <div className="faq-side">
                        <button className={`faq-item ${faqAtiva === 'funciona' ? 'active' : ''}`} onClick={() => setFaqAtiva('funciona')}>Como funciona o Futdelicia</button>
                        <button className={`faq-item ${faqAtiva === 'pagamento' ? 'active' : ''}`} onClick={() => setFaqAtiva('pagamento')}>Quais métodos de pagamento são aceitos?</button>
                        <button className={`faq-item ${faqAtiva === 'tempoReal' ? 'active' : ''}`} onClick={() => setFaqAtiva('tempoReal')}>Posso acompanhar meu pedido em tempo real?</button>
                        <button className={`faq-item ${faqAtiva === 'descontos' ? 'active' : ''}`} onClick={() => setFaqAtiva('descontos')}>Promoções especiais disponíveis?</button>
                        <button className={`faq-item ${faqAtiva === 'regiao' ? 'active' : ''}`} onClick={() => setFaqAtiva('regiao')}>Disponível na minha região?</button>
                    </div>

                    <div className="info-cards-side">
                        <div className="step-cards-container">
                        <div className="step-card featured-card">
                            <h3>{respostasFaq[faqAtiva].titulo}</h3>
                            <div className="step-icon">{respostasFaq[faqAtiva].icone}</div>
                            <p>{respostasFaq[faqAtiva].texto}</p>
                        </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="other-tabs-content">
                    <h3>{conteudosAbas[abaPrincipal].titulo}</h3>
                    <p className="large-text">{conteudosAbas[abaPrincipal].texto}</p>
                    <p className="extra-text">{conteudosAbas[abaPrincipal].extra}</p>
                    
                    <button 
                        className="btn-action-about" 
                        onClick={handleSaibaMais}
                    >
                        {abaPrincipal === 'suporte' ? 'Falar com Atendente' : 'Saiba mais'}
                    </button>
                    </div>
                )}
                </div>
            </section>
        </div>
    );
}

export default Faq;