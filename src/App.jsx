import './App.css';
import Navbar from './components/Navbar';
import AcompanharPedido from './components/AcompanharPedido';
import Cardapio from './components/Cardapio';
import Ofertas from './components/Ofertas';
import Suporte from './components/Suporte';
import Home from "./components/home/Home";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Scroll from './components/Scroll'; 

function App() {
  return (
    <div>
      <Scroll />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cardapio" element={<Cardapio />} />
          <Route path="/AcompanharPedido" element={<AcompanharPedido />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Suporte" element={<Suporte />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App
