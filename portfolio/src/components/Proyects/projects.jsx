import style from "./projects.module.css";
import proyectoCard from "../../images/proyecto_card.png"
import Carrousel from "../Carrousel/carrousel";
import OneProject from "./oneProject";
import Titulo from "../Titulo/titulo"

const Proyects = () => {
    window.scrollTo(0, 0);
    return (
        <div className={style.container}>
            <div className={style.titleCont}>
                <Titulo titulo="PROYECTOS" inicial="P"/>
            </div>
            <Carrousel/>
            <div className={style.cardsContainer}>
                <OneProject imagen={proyectoCard}/>
                <OneProject imagen={proyectoCard}/>
                <OneProject imagen={proyectoCard}/>
                <OneProject imagen={proyectoCard}/>
            </div>

        </div>
    )
}
export default Proyects