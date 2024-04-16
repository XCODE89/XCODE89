import { NavLink } from "react-router-dom"
import style from "./navBar.module.css"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../context/CounterContext"

const NavBar = () => {
    const {selected, setSelectedItem} = useContext(AuthContext)

    useEffect(() => {
        console.log("**************", selected)
        const storedSelected = localStorage.getItem("selected");
        if (storedSelected) {
            setSelectedItem(storedSelected);
        }
    }, [selected]);

    const handleItem = (e) => {
        console.log("/*/*/*/*", e.target.textContent)
        setSelectedItem(e.target.textContent)
        localStorage.setItem("selected", e.target.textContent);
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