import '../assets/footer.css'; 
import logoFutdelicia from "../imgs/futdeliciaLogo.png"; 
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-col branding-col">
                    <div className="footer-logo-section"> 
                        <img src={logoFutdelicia} alt="FutDelícia" className="footer-logo-img" />
                    </div>
                    <div className="app-badges">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="app-badge-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="app-badge-img" />
                    </div>
                </div>

                <div className="footer-col newsletter-col">
                    <h4 className="newsletter-title">Receba ofertas exclusivas</h4>
                    <div className="input-group">
                        <input type="email" placeholder="seuemail@gmail.com" />
                        <button className="btn-subscribe">Inscrever-se</button>
                    </div>
                    <p className="spam-notice">não enviamos spam, leia nossa política</p>
                    
                    <div className="social-icons">
                        <FaFacebook className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaTiktok className="social-icon" />
                        <FaSnapchatGhost className="social-icon" />
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4>Páginas legais</h4>
                    <ul className="footer-links">
                        <li><a href="#termos">Termos e condições</a></li>
                        <li><a href="#privacidade">Privacidade</a></li>
                        <li><a href="#cookies">Cookies</a></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4>Links importantes</h4>
                    <ul className="footer-links">
                        <li><a href="#ajuda">Obter ajuda</a></li>
                        <li><a href="#entregar">Cadastre-se</a></li>
                        <li><a href="#conta">Criar uma conta</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <span>Futdelicia Copyright 2024, All Rights Reserved.</span>
                    <div className="bottom-links">
                        <a href="#privacidade">Política</a>
                        <a href="#termos">Termos</a>
                        <a href="#dados">Não vender dados</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;