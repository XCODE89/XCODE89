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
import { IoMdCloudDownload } from "react-icons/io";
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5, FaGitAlt, FaBootstrap, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiDjango, SiTailwindcss, SiExpress } from "react-icons/si";





const About = () => {
    const [start, setStart] = useState(false)
    window.scrollTo(0, 0);
    useEffect(()=>{
        setStart(true)
    },[])
    return (
        <div className={style.container}>
            <div className={style.grid}>
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
                                <IoMdCloudDownload className={style.icon} size={35}/>

                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.techsContainer}>
                <h2 className={style.title}>HABILIDADES</h2>
                <div className={style.skills}>
                    <div className={style.skillBox}>
                        <h3 className={style.skillGroup}>LANGUAGES</h3>
                        <div className={style.skillsList}>
                            <div className={style.tech}>
                                <IoLogoJavascript className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Javascript</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <FaPython className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Python</h4>
                                <h5 className={style.techLevel}>Basic</h5>
                            </div>
                        </div>
                    </div>

                    <div className={style.skillBox}>
                        <h3 className={style.skillGroup}>FRONT END</h3>
                        <div className={style.skillsList}>
                            <div className={style.tech}>
                                <FaReact className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>React</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <FaCss3Alt className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>CSS</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <FaHtml5 className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>HTML</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <SiTailwindcss className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Tailwind</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <FaBootstrap className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Bootstrap</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                        </div>
                    </div>

                    <div className={style.skillBox}>
                        <h3 className={style.skillGroup}>BACK END</h3>
                        <div className={style.skillsList}>
                            <div className={style.tech}>
                                <FaNodeJs className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>NodeJS</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <SiExpress className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>ExpressJS</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <SiDjango className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Django</h4>
                                <h5 className={style.techLevel}>Basic</h5>
                            </div>
                        </div>
                    </div>

                    <div className={style.skillBox}>
                        <h3 className={style.skillGroup}>BASE DE DATOS</h3>
                        <div className={style.skillsList}>
                            <div className={style.tech}>
                                <BiLogoPostgresql className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>PostgreSQL</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <SiMongodb className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>MongoDB</h4>
                                <h5 className={style.techLevel}>Basic</h5>
                            </div>
                        </div>
                    </div>

                    <div className={style.skillBox}>
                        <h3 className={style.skillGroup}>HERRAMIENTAS</h3>
                        <div className={style.skillsList}>
                            <div className={style.tech}>
                                <FaGitAlt className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Git</h4>
                                <h5 className={style.techLevel}>Intermediate</h5>
                            </div>
                            <div className={style.tech}>
                                <FaDocker className={style.image} color={"var(--title-color)"} size={40}/>
                                <h4 className={style.techName}>Docker</h4>
                                <h5 className={style.techLevel}>Basic</h5>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
export default About
