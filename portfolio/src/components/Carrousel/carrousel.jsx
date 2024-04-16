import { useEffect, useState } from "react";
import proyectoBanner1 from "../../images/banner/proyecto_banner1.gif";
import proyectoBanner2 from "../../images/banner/proyecto_banner2.gif";
import proyectoBanner3 from "../../images/banner/proyecto_banner3.gif";
import style from "./carrousel.module.css"
import CarrouselItem from "./carrouselItem";

const Carrousel = () => {
    
    return (
            <div className={style.bannerContainer}>
                <CarrouselItem current={0} banner={proyectoBanner1}/>
                <CarrouselItem current={1} banner={proyectoBanner2}/>
                <CarrouselItem current={2} banner={proyectoBanner3}/>
            </div>
    )
}
export default Carrousel