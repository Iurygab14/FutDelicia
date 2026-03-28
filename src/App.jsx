import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cardapio from './pages/Cardapio';
import Ofertas from './pages/Ofertas';
import Suporte from './pages/Suporte';
import Home from "./pages/Home";
import Footer from './components/Footer';
import Login from './pages/login';
import Scroll from './components/Scroll';
import Sobre from './pages/Sobre';
import Parcerias from './pages/Parcerias';
import DocumentosLegais from './pages/DocumentosLegais';
import AcompanharPedido from './pages/AcompanharPedido';
import AdminPedidos from './pages/AdminPedidos';
import { CartProvider } from './context/CarrinhoContext';

function App() {
  const location = useLocation();

  // O JS diferencia maiúsculas. Se sua rota é "/Login", aqui deve ser igual.
  const esconderLayout = location.pathname === '/Login';

  return (
    <CartProvider>
    <div>
      <Scroll />
      
      {/* Só renderiza se NÃO for a rota de Login */}
      {!esconderLayout && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/parcerias" element={<Parcerias />} />
          <Route path="/Cardapio" element={<Cardapio />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/AcompanharPedido" element={<AcompanharPedido />} />
          <Route path="/Suporte" element={<Suporte />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Termos" element={<DocumentosLegais />} />
          <Route path="/Privacidade" element={<DocumentosLegais />} />
          <Route path="/AdminPedidos" element={<AdminPedidos />} />
        </Routes>
      </main>

      {/* Só renderiza se NÃO for a rota de Login */}
      {!esconderLayout && <Footer />}
    </div>
    </CartProvider>
  );
}

export default App