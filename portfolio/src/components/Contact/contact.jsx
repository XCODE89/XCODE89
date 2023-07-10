import style from "./contact.module.css"

const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>
                    CONTACTAME
                </h1>
            </div>

            <div>
                <div className={style.content}>
                    <div className={style.shadowTitle}>C</div>
                    <div className={style.secondBlock}>
                        <div className={style.linea}>linea</div>
                        <div className={style.infoContainer}>
                            <div>foto</div>
                            <div>phone</div>
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
                <div>map</div>
                <form className={style.formContainer}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name"></input>
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email"></input>
                    <label htmlFor="subject">Asunto:</label>
                    <input type="text" name="subject"></input>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea type="textarea" name="message"></textarea>
                    <button>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}
export default Contact