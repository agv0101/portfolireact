import { FaEnvelope, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../pages/contactPage.css";

export default function ContactPage() {
    return (
        <div className="background-contact">
            <div className="contact-container">
                <div className="contact-text">
                    <h2>Contáctame</h2>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" placeholder="Ingresa tu nombre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" placeholder="Ingresa tu correo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" placeholder="Escribe tu mensaje" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>

            <div className="media-container">
                <Link to="#"><div className="media-card"><FaEnvelope />agv0101@gmail.com</div></Link>
                <Link to="#"><div className="media-card"><FaWhatsapp /> 612 34 56 78</div></Link>
                <Link to="#"><div className="media-card"><FaTelegram /> @agv0101</div></Link>
                <Link to="https://github.com/agv0101"><div className="media-card"><FaGithub /> agv0101</div></Link>

            </div>
        </div>
    );
}
