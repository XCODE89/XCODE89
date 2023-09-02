import { useEffect, useState } from "react"
import style from "./about.module.css"
import express from "../../images/logos/ExpressJs.png"
import mongo from "../../images/logos/MongoDB.png"
import node from "../../images/logos/NodeJs.png"
import postgre from "../../images/logos/PostgreSQL.png"
import python from "../../images/logos/Python.png"
import react from "../../images/logos/React.png"
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
                    "¡Hola! Soy Miguel, un apasionado desarrollador web full stack en constante evolución. Mi trayectoria única me llevó de la biología al mundo de la tecnología. Recién adentrándome en este emocionante campo, he logrado concretar proyectos significativos que reflejan mi rápido aprendizaje y determinación. Cada día es una oportunidad para fusionar mi sólida formación científica con mi nueva pasión por el desarrollo, creando soluciones digitales que impactan. Además de codificar, creo en el poder de las habilidades blandas en un programador: comunicación efectiva, adaptabilidad y trabajo en equipo. Estoy emocionado por seguir aprendiendo y colaborar en proyectos desafiantes que marquen la diferencia."
                    </p>
                </div>
                <div className={style.buttons}>
                    <button className={style.button}>
                        <span class={style.buttonContent}>Download </span>
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
                    
                </div>
            </div>
        </div>
    )
}
export default About
