import { useState, useEffect } from "react"
import style from "../Titulo/titulo.module.css"

const Titulo = ({titulo, inicial}) => {
    const [start, setStart] = useState(false)
    useEffect(()=>{
        setStart(true)
    },[])
   return(
        <div className={style.container}>
            <div className={style.titleEffect}>
                <h1 className={style.title}>
                    {titulo}
                </h1>
                <div className={start?style.linea:style.lineaOculta}></div>
            </div>
            <div className={start?style.shadowTitle:style.shadowTitleOculto}>
                {inicial}            
            </div>
        </div>
   )
}

export default Titulo;