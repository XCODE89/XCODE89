import React, { useState, useContext } from 'react';
import style from "./landing.module.css"
import darkModeImage from '../../images/desconocida.jpg';
import { NavLink } from 'react-router-dom';
import ParticlesBackground from "../Particles/particlesBackground";
import { AuthContext } from '../../context/CounterContext';
import github from "../../images/logos/Github.png"
import linked from "../../images/logos/LinkedIn.png"

const Landing = () => {
  window.scrollTo(0, 0);

  const {setSelectedItem} = useContext(AuthContext)
    return (
      <div className={style.container}>
          <ParticlesBackground/>
          <div className={style.grid}>
            <div className={style.imageContainer}>
              <img src={darkModeImage} className={style.image}/>
            </div>
            <div className={style.textContainer}>
              <h1 className={style.content}>¡Hola!. Soy <br/> <span className={style.name}> Miguel Aponte</span></h1>
              <h2 className={style.content2}>Desarrollador Web Full Stack</h2>
              <h3 className={style.description}>Con conocimiento avanzado en desarrollo de plataformas web y aplicaciones móviles, utilizando las últimas tecnologías para crear soluciones innovadoras y efectivas.</h3>
              <button className={style.button}>
                  <span className={style.spanButton}>
                  <NavLink to="/about" className={style.button2} onClick={()=>setSelectedItem("SOBRE MI")}>CONÓCEME</NavLink>
                  </span>
              </button>

              <div className={style.socialContainer}>
                <button className={style.imageButton}>
                    <div className={style.imageBox}>
                        <img src={linked} className={style.socialImg}/>
                    </div>
                </button>
                <button className={style.imageButton}>
                <div className={style.imageBox}>
                        <img src={github} className={style.socialImg}/>
                    </div>
                </button>
                </div>
            </div>
            <div className={style.imageContainer2}>
              <img src={darkModeImage} className={style.image}/>
            </div>
          </div>
        </div>
    );
  }
  
export default Landing