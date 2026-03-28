import "C:/Users/Windows 11/futdelicia/src/assets/home.css";
import Faq from "../components/Faq";
import Anuncio from "../components/Anuncio";
import OfertasEspeciais from "../components/OfertasEspeciais";

function Home() {
  
  return (
    <div className="main-wrapper">
      <Anuncio/>
      <OfertasEspeciais/>
      <Faq/>
    </div>
  );
}

export default Home;