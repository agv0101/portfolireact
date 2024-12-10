import { useState,useEffect } from "react";
import getProjects from "../service/projectFetch";
import Card from "./card";
import "../pages/landingPage.css";
export default function LandingPage(){
    const [projects,setProjects]=useState([]);


    useEffect(() => {
        getProjects(setProjects);
    }, []);
    console.log(projects);

    return(
    <>
        <div className="background-landing">
            <div className="title-and-projects">
                <div className="landingpage-title">
                    <h3>Mis Proyectos</h3>
                    <h5>(Click sobre el proyecto para ir a la página)</h5>
                </div>
            
                <div className="landingpage-container">
                    {projects.map((project, index) =>
                    <Card project={project} key={index}/>
                    )}
                </div>
            </div>
        </div>
    </>
        
        
    )
}