import fastFood from "C:/Users/Windows 11/futdelicia/src/imgs/fastFood.jpg";
import comidaVegana from "C:/Users/Windows 11/futdelicia/src/imgs/comidaVegana.jpg";
import doces from "C:/Users/Windows 11/futdelicia/src/imgs/doces.jpg";
import hamburguer from "C:/Users/Windows 11/futdelicia/src/imgs/hamburguer.jpg";
import salada from "C:/Users/Windows 11/futdelicia/src/imgs/salada.jpg";
import massa from "C:/Users/Windows 11/futdelicia/src/imgs/massas.jpg";
import pizza from "C:/Users/Windows 11/futdelicia/src/imgs/pizzas.jpg";
import cafe from "C:/Users/Windows 11/futdelicia/src/imgs/cafes.jpg";
import sopas from "C:/Users/Windows 11/futdelicia/src/imgs/sopas.avif";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function OfertasEspeciais() {

    const navigate = useNavigate();
    const handleCategoryClick = (categoria) => {navigate(`/cardapio?categoria=${categoria}`);};

    return(
        <div>
            {/* SEÇÃO DE OFERTAS */}
            <section className="promo-section">
                <div className="promo-grid">
                    {/* CARD FAST FOOD */}
                    <Link to="/ofertas#hambúrgueres" className="promo-card">
                        <img src={fastFood} alt="Fast Food" />
                        <span className="badge">-40%</span>
                        <div className="promo-info"><h3>Fast Food</h3></div>
                    </Link>

                    {/* CARD VEGANA */}
                    <Link to="/ofertas#saladas" className="promo-card">
                        <img src={comidaVegana} alt="Comida Vegana" />
                        <span className="badge">-20%</span>
                        <div className="promo-info"><h3>Comida Vegana</h3></div>
                    </Link>

                    {/* CARD SOBREMESAS */}
                    <Link to="/ofertas#sobremesas" className="promo-card">
                        <img src={doces} alt="Doces" />
                        <span className="badge">-30%</span>
                        <div className="promo-info"><h3>Sobremesas</h3></div>
                    </Link>
                </div>
            </section>

            {/* SEÇÃO OPÇÕES POPULARES */}
            <section className="categories-section">
                <h2 className="categories-title">Opções Populares</h2>
                <div className="categories-grid">
                <div className="category-item" onClick={() => handleCategoryClick('hambúrgueres')}>
                    <div className="category-img-box yellow"><img src={hamburguer} alt="Hambúrgueres" /></div>
                    <div className="category-name">Hambúrgueres</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('saladas')}>
                    <div className="category-img-box"><img src={salada} alt="Saladas" /></div>
                    <div className="category-name">Saladas</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('massas')}>
                    <div className="category-img-box"><img src={massa} alt="Massas" /></div>
                    <div className="category-name">Massas</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('pizzas')}>
                    <div className="category-img-box"><img src={pizza} alt="Pizzas" /></div>
                    <div className="category-name">Pizzas</div>
                </div>
                <div className="category-item" onClick={() => handleCategoryClick('cafés-da-manhã')}>
                    <div className="category-img-box"><img src={cafe} alt="Cafés" /></div>
                    <div className="category-name">Cafés da Manhã</div>
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