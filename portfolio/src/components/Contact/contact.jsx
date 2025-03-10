import { useEffect, useState, useRef } from "react"
import style from "./contact.module.css"
import {BiPhone, BiEnvelope} from "react-icons/bi"
import github from "../../images/logos/Github.png"
import linked from "../../images/logos/LinkedIn.png"
import foto from "../../assets/img/maph.png"
import Titulo from "../Titulo/titulo"
import 'flag-icon-css/css/flag-icons.css'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [start, setStart] = useState(false)
    useEffect(()=>{
        setStart(true)
    },[])

    const refForm = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        console.log("holis", serviceId)
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

        emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
        .then(result => refForm.current.reset())
        .catch(error => console.error(error))
    }
    return (
        <div className={style.container} id="contact">
            <div className={style.main}>
                <div className={style.titleContainer}>
                    <Titulo titulo="CONTÁCTAME" inicial="C"/>
                </div>

                <div className={style.secondContainer}>
                    <div className={style.content}>
                        <div className={style.secondBlock}>
                            <div className={style.infoContainer}>
                                <div className={style.imageContent}>
                                    <img src={foto} className={style.photo} alt="logo"/>
                                </div>
                                <div className={style.contactInfo}>
                                    <div className={style.infoBox}>
                                        <BiPhone size={30} color="#dae3e5"/>
                                        <div className={style.info}>
                                            <p><span></span>+56 9 2062 5122</p>
                                            <p><span></span>+56 9 8391 7124</p>
                                        </div>
                                    </div>
                                    <div className={style.infoBox}>
                                        <BiEnvelope size={30} color="#dae3e5"/>
                                        {/* <BiPhone size={40} color="#dae3e5"/> */}
                                        <div className={style.info}>
                                            <p>dm.aponte.h@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.formContainer}>    
                        <form ref={refForm} className={style.form} onSubmit={handleSubmit}>
                            <div className={style.formTitle}>Envíame un mensaje!</div>
                            <label htmlFor="name" className={style.label}>Nombre:</label>
                            <input type="text" name="name" className={style.input} required></input>
                            <label htmlFor="email" className={style.label}>Correo:</label>
                            <input type="email" name="email" className={style.input} required></input>
                            <label htmlFor="subject" className={style.label}>Asunto:</label>
                            <input type="text" name="subject" className={style.input} required></input>
                            <label htmlFor="message" className={style.label}>Mensaje:</label>
                            <textarea type="textarea" name="message" className={`${style.input} ${style.message}`} required></textarea>
                            <button className={style.submit}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact