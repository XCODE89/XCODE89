import { useEffect, useState } from "react";
import proyectoBanner1 from "../../images/banner/proyecto_banner1.gif";
import proyectoBanner2 from "../../images/banner/proyecto_banner2.gif";
import proyectoBanner3 from "../../images/banner/proyecto_banner3.gif";
import style from "./carrousel.module.css"

const Carrousel = () => {
    const [currentImage, setCurrentImage] = useState(2)
    const slideRight = () => {
        if(currentImage<2){
        setCurrentImage(currentImage+1);
        } else if (currentImage===2) {
            setCurrentImage(0)
        }
    }
    const slideLeft = () => {
        if(currentImage>0){
        setCurrentImage(currentImage-1);
        } else if (currentImage===0) {
            setCurrentImage(2)
        }
    }

    const [autoplay, setAutoplay] = useState(true)
    let timeout = null
    useEffect(() => {
        timeout = autoplay &&
            setTimeout(()=>{
                slideRight()
            }, 3500)
        
    })
    
    return (
            <div className={style.bannerContainer}>
                <div className={currentImage===0?style.carrouselItemActive:style.carrouselItem} onMouseEnter={()=>{setAutoplay(false)}} onMouseLeave={()=>{setAutoplay(true)}}>
                    <div className={style.imageCont}>
                        <img src={proyectoBanner1} className={style.image}/>
                    </div>
                    <div className={style.tecBoxBanner}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                    <div className={style.leftArrow} onClick={slideLeft}>&lsaquo;</div>
                    <div className={style.rightArrow} onClick={slideRight}>&rsaquo;</div>
                </div>
                <div className={currentImage===1?style.carrouselItemActive:style.carrouselItem} onMouseEnter={()=>{setAutoplay(false)}} onMouseLeave={()=>{setAutoplay(true)}}>
                    <div className={style.imageCont}>
                        <img src={proyectoBanner2} className={style.image}/>
                    </div>
                    <div className={style.tecBoxBanner}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                    <div className={style.leftArrow} onClick={slideLeft}>&lsaquo;</div>
                    <div className={style.rightArrow} onClick={slideRight}>&rsaquo;</div>
                </div>
                <div className={currentImage===2?style.carrouselItemActive:style.carrouselItem} onMouseEnter={()=>{setAutoplay(false)}} onMouseLeave={()=>{setAutoplay(true)}}>
                    <div className={style.imageCont}>
                        <img src={proyectoBanner3} className={style.image}/>
                    </div>
                    <div className={style.tecBoxBanner}>
                        <div>tec 1</div>
                        <div>tec 2</div>
                        <div>tec 3</div>
                    </div>
                    <div className={style.leftArrow} onClick={slideLeft}>
                        &lsaquo;
                    </div>
                    <div className={style.rightArrow} onClick={slideRight}>
                        &rsaquo;
                    </div>
                </div>
                <div className={style.pagination}>
                    <div className={currentImage===0?style.pageActive:style.page} onClick={()=>setCurrentImage(0)}></div>
                    <div className={currentImage===1?style.pageActive:style.page} onClick={()=>setCurrentImage(1)}></div>
                    <div className={currentImage===2?style.pageActive:style.page} onClick={()=>setCurrentImage(2)}></div>
                </div>
            </div>
    )
}
export default Carrousel