import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AcompanharPedido from './components/AcompanharPedido';
import Cardapio from './components/Cardapio';
import Ofertas from './components/Ofertas';
import Suporte from './components/Suporte';
import Home from "./components/home/Home";
import Footer from './components/Footer';
import Login from './components/login';
import Scroll from './components/Scroll';

function App() {
  const location = useLocation();

  // O JS diferencia maiúsculas. Se sua rota é "/Login", aqui deve ser igual.
  const esconderLayout = location.pathname === '/Login';

  return (
    <div>
      <Scroll />
      
      {/* Só renderiza se NÃO for a rota de Login */}
      {!esconderLayout && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cardapio" element={<Cardapio />} />
          <Route path="/AcompanharPedido" element={<AcompanharPedido />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Suporte" element={<Suporte />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

      {/* Só renderiza se NÃO for a rota de Login */}
      {!esconderLayout && <Footer />}
    </div>
  );
}


export default App
