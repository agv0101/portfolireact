import "../pages/homePage.css";
import { Link } from "react-router-dom";

export default function HomePage(page,setPage){
    return(
        <div className="homepage-container">
            <div className="presentacion">
                <div className="image-container">
                    <img src="./img/Alonso_2016.jpg" alt=""/>
                </div>
                <div className="text-container">
                    <p><h1>Alberto Guerrero</h1></p>
                    <p><h2>Técnico superior en administración de sistemas informáticos y redes</h2></p>
                    <p>
                    ¡Hola! Me llamo Alberto. Soy administrador de sistemas informáticos aunque también me dedico al diseño gráfico de páginas web.
                    Si tienes algún proyecto o si quieres crear un software para tu negocio, contáctame. 
                    Me encargaré de que sea un trabajo que como mínimo se adecue a tus expectativas o que incluso las supere.
                    Soy tanto administrador como diseñador. Si tienes algún proyecto o si necesitas crear software para tu negocio,
                    ponte en contacto conmigo. Realizaré tu proyecto lo antes posible.
                    </p>
                    <div className="button-container">
                        <Link to="/contact" className={page==="/contact"?"activate":""} onClick={() => setPage("/contact")}><button className="button-pres">Contrátame</button></Link>
                        <button className="button-pres">Descarga mi CV</button>
                    </div> 
                </div>
                
            </div>
        </div>
        
    )
}