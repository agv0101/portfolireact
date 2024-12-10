import {Link} from "react-router-dom";
import "../components/header.css"

export default function Header({page,setPage}){
    return(
        <header>
            <nav>
                <Link to="/home" className="logo">Y-Devs</Link>
                <ul>
                    <li><Link to="/home" className={page==="/home"?"activate":""} onClick={() => setPage("/home")}>Sobre mí</Link></li>
                    <li><Link to="/landing" className={page==="/landing"?"activate":""} onClick={() => setPage("/landing")}>Proyectos</Link></li>
                    <li><Link to="/contact" className={page==="/contact"?"activate":""} onClick={() => setPage("/contact")}>Contacto</Link></li>
                    <li><Link to="/newsletter" className={page==="/newsletter"?"activate":""} onClick={() => setPage("/newsletter")}>Newsletter</Link></li>
                </ul>
                <div className="lang">
                    <select>
                        <option value="esp" selected>Español</option>
                        <option value="cat">Catalán</option>
                        <option value="en">English</option>
                    </select>
                </div>            
            </nav>
        </header>
    )
}