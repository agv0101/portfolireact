import { Link } from "react-router-dom";
import "../pages/card.css"
export default function Card({project}){
    return(
        
            <div className="project-card">
                <Link to={project.source}>
                    <div className="image-card">
                        <img src={project.image} alt=""/>
                    </div>
                
                
                    <div className="info-card">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                </Link>

            </div>
        
    )
}