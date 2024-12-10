import {Link} from "react-router-dom";
import "../components/header.css"

export default function Header({page,setPage}){
    return(
        <header>
            <nav>
                <Link to="/home" className="logo" onClick={() => setPage("/home")}>Y-Devs</Link>
                <ul>
                    <li><Link to="/home" className={page==="/home"?"activate":""} onClick={() => setPage("/home")}>Sobre mí</Link></li>
                    <li><Link to="/landing" className={page==="/landing"?"activate":""} onClick={() => setPage("/landing")}>Proyectos</Link></li>
                    <li><Link to="/contact" className={page==="/contact"?"activate":""} onClick={() => setPage("/contact")}>Contacto</Link></li>
                    <li><Link to="/newsletter" className={page==="/newsletter"?"activate":""} onClick={() => setPage("/newsletter")}>Newsletter</Link></li>
                </ul>
                <div className="logo">
                    <Link to="https://www.iesemilidarder.com/web/"><img src="/img/iesemili.webp" alt="logoIES"/></Link>
                </div>            
            </nav>
        </header>
    )
}