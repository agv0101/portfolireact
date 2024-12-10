import axios from "axios";

export default function getProjects(setProjects){
    axios.get('/data/projects.json')
        .then(res => {
            if(res.data.length===0) console.log("Unable to load any products");
            else setProjects(res.data);  
        }).catch(error => {
            console.error(error);
        })
}