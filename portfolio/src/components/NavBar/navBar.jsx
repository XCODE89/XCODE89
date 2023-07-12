import { NavLink } from "react-router-dom"
import style from "./navBar.module.css"
import { useState } from "react"

const NavBar = () => {
    const [selected, setSelected] = useState("")
    const [item, setItem] = useState("")
    const handleItem = (e) => {
        setSelected(e.target.textContent)

    }
    return (
        <div className={style.container}>
            <div className={style.itemContainer}>
                <NavLink to="/" className={selected==="HOME"?style.itemSelected:style.item} onClick={handleItem} >HOME</NavLink>
                <div className={selected==="HOME"?style.shadow:null}></div>
            </div>
            <div className={style.itemContainer}>
                <NavLink to="/about" className={selected==="SOBRE MI"?style.itemSelected:style.item} onClick={handleItem}>SOBRE MI</NavLink>
                <div className={selected==="SOBRE MI"?style.shadow:null}></div>
            </div>
            <div className={style.itemContainer}>
                <NavLink to="/projects" className={selected==="PROYECTOS"?style.itemSelected:style.item} onClick={handleItem}>PROYECTOS</NavLink>
                <div className={selected==="PROYECTOS"?style.shadow:null}></div>
            </div>
            <div className={style.itemContainer}>
                <NavLink to="/contact" className={selected==="CONTACTO"?style.itemSelected:style.item} onClick={handleItem}>CONTACTO</NavLink>
                <div className={selected==="CONTACTO"?style.shadow:null}></div>
            </div>
        </div>
    )
}
export default NavBar