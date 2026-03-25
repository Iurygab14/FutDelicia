import garotaPizza from "C:/Users/Windows 11/futdelicia/src/imgs/garotaPizza.png";

function Anuncio() {
    
    return(
        <div>
            {/* SEÇÃO ANÚNCIO */}
            <section className="anuncio-section">
                <div className="anuncio-text-col">
                <p className="anuncio-subtitle">Peça comida, delivery e mercado.</p>
                <h1 className="anuncio-title">
                    Desperte seus sentidos,<br />
                    <span className="text-green">Rápido e Gostoso</span>
                </h1>
                <div className="search-box">
                    <input type="text" placeholder="e.g. EC4R 3TE" />
                    <button className="btn-search">Procurar</button>
                </div>
                </div>

                <div className="anuncio-image-col">
                <div className="anuncio-shadow-css"></div>
                <img src={garotaPizza} alt="Moça com Pizza" className="anuncio-main-img" />
                <div className="notifications-group">
                    <div className="notif-card card-1">
                    <div className="notif-header">
                        <div className="avatar-css">FD</div>
                        <div className="notif-details">
                        <h3>FutDelícia</h3>
                        <p>now</p>
                        </div>
                    </div>
                    <h4>Recebemos o seu pedido!</h4>
                    <p>Aguardando a confirmação</p>
                    </div>
                    <div className="notif-card card-2">
                    <div className="notif-header">
                        <div className="avatar-css">FD</div>
                        <div className="notif-details">
                        <h3>FutDelícia</h3>
                        <p>now</p>
                        </div>
                    </div>
                    <h4>Pedido aceito ✅</h4>
                    <p>Seu pedido será entregue em breve</p>
                    </div>
                    <div className="notif-card card-3">
                    <div className="notif-header">
                        <div className="avatar-css">FD</div>
                        <div className="notif-details">
                        <h3>FutDelícia</h3>
                        <p>now</p>
                        </div>
                    </div>
                    <h4>Seu entregador está por perto 🛵</h4>
                    <p>Prepare-se!</p>
                    </div> 
                </div>
                </div>
            </section>
        </div>
    )
}

export default Anuncio;