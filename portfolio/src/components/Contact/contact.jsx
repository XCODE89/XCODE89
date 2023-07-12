import { useEffect, useState } from "react"
import style from "./contact.module.css"
import {BiPhone} from "react-icons/bi"

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
                    CONTACTAME
                </h1>
            </div>

            <div>
                <div className={style.content}>
                    <div className={start?style.shadowTitle:style.shadowTitleOculto}>C</div>
                    <div className={style.secondBlock}>
                        <div className={start?style.linea:style.lineaOculta}></div>
                        <div className={style.infoContainer}>
                            <div>foto</div>
                            <div>{BiPhone}</div>
                            <div>email</div>
                        </div>
                        <div className={style.socialContiner}>
                            <div>linkedin</div>
                            <div>github</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.formMap}>
                {/* <div>map</div> */}
                <form className={style.formContainer}>
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