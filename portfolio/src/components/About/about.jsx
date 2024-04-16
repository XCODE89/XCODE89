import { useEffect, useState } from "react"
import style from "./about.module.css"
import express from "../../images/logos/ExpressJs.png"
import mongo from "../../images/logos/MongoDB.png"
import node from "../../images/logos/NodeJs.png"
import postgre from "../../images/logos/PostgreSQL.png"
import python from "../../images/logos/Python.png"
import react from "../../images/logos/React.png"
import django from "../../images/logos/Django.png"
import Titulo from "../Titulo/titulo"

const About = () => {
    const [start, setStart] = useState(false)
    window.scrollTo(0, 0);
    useEffect(()=>{
        setStart(true)
    },[])
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <Titulo titulo="SOBRE MI" inicial="S"/>
            </div>
            <div className={style.content}>
                <div>
                    <p className={style.text}>
                    ¡Hola! Soy Miguel, un desarrollador web full stack con un trasfondo diverso. Mi capacidad de adaptación se destaca en proyectos que reflejan mi rápido aprendizaje. Fusiono mi sólida formación con la tecnología, creando soluciones digitales impactantes. Además de programar, valoro habilidades blandas como comunicación efectiva y trabajo en equipo. Emocionado por aprender y contribuir a proyectos desafiantes que dejen huella en el mundo digital. 🚀✨
                    </p>
                </div>
                <div className={style.buttons}>
                    <button className={style.button}>
                        <a href="./CV_DANTE_APONTE.pdf" download className={style.link}>
                            <span className={style.buttonContent}>Descargar CV</span>
                        </a>
                    </button>
                </div>
                <div className={style.techsContainer}>
                    <div className={style.tech}>
                        <img src={react} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={express} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={node} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={postgre} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={mongo} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={python} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={django} className={style.image}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default About
