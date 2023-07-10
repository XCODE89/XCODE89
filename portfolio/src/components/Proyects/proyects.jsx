import style from "./proyects.module.css";
import proyectoCard from "../../images/proyecto_card.png"
import Carrousel from "../Carrousel/carrousel";

const Proyects = () => {
    return (
        <div className={style.container}>
            <Carrousel/>
            <div className={style.cardsContainer}>
                <div className={style.cardContainer}>
                    <div className={style.cardImageCont}>
                        <img src={proyectoCard} className={style.cardImage}/>
                    </div>
                    <div className={style.tecBoxCard}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <div className={style.cardImageCont}>
                        <img src={proyectoCard} className={style.cardImage}/>
                    </div>
                    <div className={style.tecBoxCard}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <div className={style.cardImageCont}>
                        <img src={proyectoCard} className={style.cardImage}/>
                    </div>
                    <div className={style.tecBoxCard}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <div className={style.cardImageCont}>
                        <img src={proyectoCard} className={style.cardImage}/>
                    </div>
                    <div className={style.tecBoxCard}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Proyects