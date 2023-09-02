import { useEffect, useState } from "react"
import style from "./contact.module.css"
import {BiPhone, BiEnvelope} from "react-icons/bi"
import github from "../../images/logos/Github.png"
import linked from "../../images/logos/LinkedIn.png"
import foto from "../../images/desconocida.jpg"
import Titulo from "../Titulo/titulo"
import 'flag-icon-css/css/flag-icons.css'

const Contact = () => {
    const [start, setStart] = useState(false)
    window.scrollTo(0, 0);
    useEffect(()=>{
        setStart(true)
    },[])
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <Titulo titulo="CONTÁCTAME" inicial="C"/>
            </div>

            <div className={style.secondContainer}>
                <div className={style.content}>
                    <div className={style.secondBlock}>
                        <div className={style.infoContainer}>
                            <div className={style.infoBox}>
                                <img src={foto} className={style.photo}/>
                            </div>
                            <div className={style.infoBox}>
                                <BiPhone size={40} color="#dae3e5"/>
                                <p><span className="flag-icon flag-icon-pe"></span>+51 989957042</p>
                                <p><span className="flag-icon flag-icon-cl"></span>+56 983917124</p>
                            </div>
                            <div className={style.infoBox}>
                                <BiEnvelope size={40} color="#dae3e5"/>
                                <p>dm.aponte.h@gmail.com</p>

                            </div>
                        </div>
                        <div className={style.socialContainer}>
                            <div className={style.imageBox}>
                                <img src={linked} className={style.socialImg}/>
                            </div>
                            <div className={style.imageBox}>
                                <img src={github} className={style.socialImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.formMap}>
                {/* <div>map</div> */}
                <form className={style.formContainer}>
                    <div className={style.formTitle}>Envíame un mensaje!</div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" className={style.input}></input>
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email" className={style.input}></input>
                    <label htmlFor="subject">Asunto:</label>
                    <input type="text" name="subject" className={style.input}></input>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea type="textarea" name="message" className={`${style.input} ${style.message}`}></textarea>
                    <button className={style.submit}>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}
export default Contact