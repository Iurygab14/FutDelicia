import "C:/Users/Windows 11/futdelicia/src/assets/home.css";
import { useNavigate } from 'react-router-dom';
import Faq from "./Faq";
import Anuncio from "./Anuncio";
import OfertasEspeciais from "./OfertasEspeciais";

function Home() {
  const navigate = useNavigate();
  

  const handleCategoryClick = (categoria) => {
    navigate('/Cardapio', { state: { filter: categoria } });
  };

  return (
    <div className="main-wrapper">
      <Anuncio/>
      <OfertasEspeciais/>
      <Faq/>
    </div>
  );
}

export default Home;