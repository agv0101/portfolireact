import "../components/footer.css"
import { Link } from "react-router-dom";

export default function Footer({page}){
    return(
        <footer>
        
        <div className="footer">
            
            <div className="social-icons">
                <Link to="#"><p className="logo">Y-Devs</p></Link>
                <p>Estoy disponible para todas tus dudas. Realmente te gustará mi trabajo. Si no es así, lo ajustaré hasta que
                estés satisfecho.</p>
                
                {(page!=="/contact"?
                <>
                    <Link to="#"><i className="fas fa-envelope"></i></Link>
                    <Link to="#"><i className="fab fa-whatsapp"></i></Link>
                    <Link to="#"><i className="fab fa-telegram"></i></Link>
                    <Link to="#"><i className="fab fa-github"></i></Link>
                </>
                :"")}
            </div>
        </div>
        <p className="copyright">Derechos de autor de Y-Devs <i className="far fa-copyright"></i></p>
        
        
    </footer>
    )
}