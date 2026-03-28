import '../assets/footer.css'; 
import logoFutdelicia from "../imgs/futdeliciaLogo.png"; 
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

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
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="social-icon" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="social-icon" /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok className="social-icon" /></a>
                        <a href="https://snapchat.com" target="_blank" rel="noreferrer"><FaSnapchatGhost className="social-icon" /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4>Páginas legais</h4>
                    <ul className="footer-links">
                        <li><Link to="/sobre">Nossa História</Link></li>
                        <li><Link to="/parcerias">Parcerias</Link></li>
                        <li><Link to="/privacidade">Privacidade</Link></li>
                        <li><Link to="/termos">Termos e condições</Link></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4>Links importantes</h4>
                    <ul className="footer-links">
                        <li><Link to="Suporte">Obter ajuda (FAQ)</Link></li>
                        <li><Link to="/Login">Entrar</Link></li>
                        <li><Link to="/Login">Criar uma conta</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <span>Futdelicia Copyright 2026, All Rights Reserved.</span>
                    <div className="bottom-links">
                        <Link to="/privacidade">Política</Link>
                        <Link to="/termos">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;