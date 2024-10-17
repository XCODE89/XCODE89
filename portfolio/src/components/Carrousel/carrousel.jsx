import { useEffect, useState } from "react";
import style from "./carrousel.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

import projects from "../../utils/projects"

const Carrousel = () => {

    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        clearTimeout(slideTimeout);
        setSlide(slide === projects.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        clearTimeout(slideTimeout);
        setSlide(slide === 0 ? projects.length - 1 :  slide - 1)
    }

    const selectSlide = (idx) => {
        setSlide(idx)
    } 
    
    let slideTimeout = setTimeout(() => {
        nextSlide();
    }, 3500);

    return (
            <div className={style.carousel}>
                <BsArrowLeftCircleFill 
                    className={`${style.arrow} ${style.arrow_left}`} 
                    onClick={prevSlide}
                />
                {projects.map((item, idx) => {
                    return (
                        <img 
                            src={item.gif} 
                            alt={item.name} 
                            key={idx} 
                            className={slide === idx 
                                ? `${style.slide} ${style.slide_active}`
                                : `${style.slide} ${style.slide_hidden}` }
                        />
                    )
                })}
                <BsArrowRightCircleFill 
                    className={`${style.arrow} ${style.arrow_right}`} 
                    onClick={nextSlide}
                />
                <span className={style.indicators}>
                    {projects.map((_,idx) => {
                        return (
                            <button key={idx} onClick={() =>selectSlide(idx)} className={slide === idx ? style.indicator : `${style.indicator} ${style.indicator_inactive}`}></button>)
                    })}
                </span>
            </div>
    )
}
export default Carrousel