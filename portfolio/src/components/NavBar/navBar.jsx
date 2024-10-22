import { NavLink } from "react-router-dom"
import style from "./navBar.module.css"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../context/CounterContext"
import { FaBars, FaXRay} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoMdCloseCircle } from "react-icons/io";

const NavBar = () => {
    const {selected, setSelectedItem} = useContext(AuthContext)

    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const storedSelected = localStorage.getItem("selected");
        if (storedSelected) {
            setSelectedItem(storedSelected);
        }
    }, [selected]);

    const handleItem = (e) => {
        setSelectedItem(e.target.textContent)
        setTimeout(()=> {
            setOpenMenu(false);
        }, 500)
        localStorage.setItem("selected", e.target.textContent);
    }

    const handleOpen = () => {
        console.log("abriendo")
        setOpenMenu(true)
    }

    const handleClose = () => {
        console.log("cerrandooooo")
        setOpenMenu(false)
    }
    return (
        <>
            <div className={style.toggle}>
                {openMenu
                ?
                <>
                    <div className={style.toggle}>
                        <IoMdCloseCircle className={style.close} onClick={handleClose} size={35}/>
                    </div>
                    <div className={style.container2}>
                        <div className={style.itemContainer}>
                            <a href="#home" className={selected==="HOME"?style.itemSelected:style.item} onClick={handleItem} >HOME</a>
                            <div className={selected==="HOME"?style.shadow:""}></div>
                        </div>
                        <div className={style.itemContainer}>
                            <a href="#about" className={selected==="SOBRE MI"?style.itemSelected:style.item} onClick={handleItem}>SOBRE MI</a>
                            <div className={selected==="SOBRE MI"?style.shadow:""}></div>
                        </div>
                        <div className={style.itemContainer}>
                            <a href="#projects" className={selected==="PROYECTOS"?style.itemSelected:style.item} onClick={handleItem}>PROYECTOS</a>
                            <div className={selected==="PROYECTOS"?style.shadow:""}></div>
                        </div>
                        <div className={style.itemContainer}>
                            <a href="#contact" className={selected==="CONTACTO"?style.itemSelected:style.item} onClick={handleItem}>CONTACTO</a>
                            <div className={selected==="CONTACTO"?style.shadow:""}></div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={style.toggle}>
                        <FaBars className={style.open} onClick={handleOpen} size={35}/>
                    </div>
                </>
                
                }
            </div>
            <div className={style.container}>
                <div className={style.itemContainer}>
                    <a href="#home" className={selected==="HOME"?style.itemSelected:style.item} onClick={handleItem} >HOME</a>href  #home                <div className={selected==="HOME"?style.shadow:""}></div>
                </div>
                <div className={style.itemContainer}>
                    <a href="#about" className={selected==="SOBRE MI"?style.itemSelected:style.item} onClick={handleItem}>SOBRE MI</a>
                    <div className={selected==="SOBRE MI"?style.shadow:""}></div>
                </div>
                <div className={style.itemContainer}>
                    <a href="#projects" className={selected==="PROYECTOS"?style.itemSelected:style.item} onClick={handleItem}>PROYECTOS</a>
                    <div className={selected==="PROYECTOS"?style.shadow:""}></div>
                </div>
                <div className={style.itemContainer}>
                    <a href="#contact" className={selected==="CONTACTO"?style.itemSelected:style.item} onClick={handleItem}>CONTACTO</a>
                    <div className={selected==="CONTACTO"?style.shadow:null}></div>
                </div>
            </div>
        </>
    )
}
export default NavBar