import { useEffect, useState } from "react"
import style from "./contact.module.css"
import {BiPhone, BiEnvelope} from "react-icons/bi"
import github from "../../images/logos/Github.png"
import linked from "../../images/logos/LinkedIn.png"
import foto from "../../images/desconocida.jpg"

const Contact = () => {
    const [start, setStart] = useState(false)
    window.scrollTo(0, 0);
    useEffect(()=>{
        setStart(true)
    },[])
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>
                    CONTÁCTAME
                </h1>
            </div>

            <div>
                <div className={style.content}>
                    <div className={start?style.shadowTitle:style.shadowTitleOculto}>C</div>
                    <div className={style.secondBlock}>
                        <div className={start?style.linea:style.lineaOculta}></div>
                        <div className={style.infoContainer}>
                            <div className={style.infoBox}>
                                <img src={foto} className={style.photo}/>
                            </div>
                            <div className={style.infoBox}>
                                <BiPhone size={40} color="#dae3e5"/>
                                <p>989957042</p>
                            </div>
                            <div className={style.infoBox}>
                                <BiEnvelope size={40} color="#dae3e5"/>
                                <p>maph0989@gmail.com</p>

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