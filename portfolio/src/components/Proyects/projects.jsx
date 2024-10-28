import style from "./projects.module.css";
import proyectoCard from "../../images/proyecto_card.png"
import Carrousel from "../Carrousel/carrousel";
import OneProject from "./projectCard";
import Titulo from "../Titulo/titulo"
import projects from "../../utils/projects";

const Proyects = () => {
    return (
        <div className={style.container} id="projects">
            <div className={style.titleCont}>
                <Titulo titulo="PROYECTOS" inicial="P"/>
            </div>
            <Carrousel/>
            <div className={style.cardsContainer}>
                {projects.map((project, index) => {
                    return (
                        <OneProject
                        key={index}
                        {...project}
                        />
                    )
                })}
            </div>

        </div>
    )
}
export default Proyects