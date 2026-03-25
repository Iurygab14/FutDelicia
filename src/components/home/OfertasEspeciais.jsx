import fastFood from "C:/Users/Windows 11/futdelicia/src/imgs/fastFood.jpg";
import comidaVegana from "C:/Users/Windows 11/futdelicia/src/imgs/comidaVegana.jpg";
import doces from "C:/Users/Windows 11/futdelicia/src/imgs/doces.jpg";
import hamburguer from "C:/Users/Windows 11/futdelicia/src/imgs/hamburguer.jpg";
import salada from "C:/Users/Windows 11/futdelicia/src/imgs/salada.jpg";
import massa from "C:/Users/Windows 11/futdelicia/src/imgs/massa.jpg";
import pizza from "C:/Users/Windows 11/futdelicia/src/imgs/pizza.jpg";
import cafe from "C:/Users/Windows 11/futdelicia/src/imgs/cafe.jpg";
import sopas from "C:/Users/Windows 11/futdelicia/src/imgs/sopas.avif";

function OfertasEspeciais() {
    return(
        <div>
            {/* SEÇÃO DE OFERTAS */}
            <section className="promo-section">
                <div className="promo-grid">
                <div className="promo-card">
                    <img src={fastFood} alt="Fast Food" />
                    <span className="badge">-40%</span>
                    <div className="promo-info"><h3>Fast Food</h3></div>
                </div>
                <div className="promo-card">
                    <img src={comidaVegana} alt="Comida Vegana" />
                    <span className="badge">-20%</span>
                    <div className="promo-info"><h3>Comida Vegana</h3></div>
                </div>
                <div className="promo-card">
                    <img src={doces} alt="Doces" />
                    <span className="badge">-30%</span>
                    <div className="promo-info"><h3>Doces</h3></div>
                </div>
                </div>
            </section>

            {/* SEÇÃO OPÇÕES POPULARES */}
            <section className="categories-section">
                <h2 className="categories-title">Opções Populares</h2>
                <div className="categories-grid">
                <div className="category-item" onClick={() => handleCategoryClick('hamburguer')}>
                    <div className="category-img-box yellow"><img src={hamburguer} alt="Hamburguer" /></div>
                    <div className="category-name">Hamburgueres</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('saladas')}>
                    <div className="category-img-box"><img src={salada} alt="Salada" /></div>
                    <div className="category-name">Saladas</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('massa')}>
                    <div className="category-img-box"><img src={massa} alt="Massa" /></div>
                    <div className="category-name">Massa</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('pizza')}>
                    <div className="category-img-box"><img src={pizza} alt="Pizza" /></div>
                    <div className="category-name">Pizza</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('cafe')}>
                    <div className="category-img-box"><img src={cafe} alt="Café" /></div>
                    <div className="category-name">Café da Manhã</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('sopas')}>
                    <div className="category-img-box"><img src={sopas} alt="Sopas" /></div>
                    <div className="category-name">Sopas</div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default OfertasEspeciais;