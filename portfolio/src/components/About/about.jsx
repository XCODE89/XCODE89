import style from "./about.module.css"
import Titulo from "../Titulo/titulo"
import { IoMdCloudDownload } from "react-icons/io";
import skillsData from "../../utils/skillsData.js";

const About = () => {
    return (
        <div className={style.container} id="about">
            <div className={style.grid}>
                <div className={style.titleContainer}>
                    <Titulo titulo="SOBRE MI" inicial="S"/>
                </div>
                <div className={style.content}>
                    <div>
                        <p className={style.text}>
                        ¡Hola! Soy Miguel, desarrollador web full stack. Me especializo en crear soluciones digitales funcionales y bien estructuradas. Disfruto trabajar en equipo, optimizar procesos y escribir código limpio y escalable. Más que programar, me enfoco en entender problemas y encontrar la mejor forma de resolverlos. Siempre busco desafíos que me permitan seguir creciendo y aportando valor. 🚀✨
                        </p>
                    </div>
                    <div>
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
                    {skillsData.map((group, index) => (
                        <div key={index} className={style.skillBox}>
                            <h3 className={style.skillGroup}>{group.group}</h3>
                            <div className={style.skillsList}>
                                {group.skills.map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={i} className={style.tech}>
                                            <Icon className={style.image} color={'var(--color-100)'} size={40} />
                                            <h4 className={style.techName}>{skill.name}</h4>
                                            <h5 className={style.techLevel}>{skill.level}</h5>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About
