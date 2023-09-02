import React, { useState } from 'react';
import style from "./landing.module.css"
import darkModeImage from '../../images/desconocida.jpg';
import { NavLink } from 'react-router-dom';
import ParticlesBackground from "../Particles/particlesBackground";

const Landing = () => {
  window.scrollTo(0, 0);
    return (
      <div className={style.container}>
          <ParticlesBackground/>
          <img src={darkModeImage} className={style.image}/>
          <div className={style.textContainer}>
            <h1 className={style.content}>¡Hola! Soy Miguel,</h1>
            <h2 className={style.content2}>Desarrollador Web Full Stack creando soluciones digitales impactantes.</h2>
            <button className={style.button}>
                <span className={style.spanButton}>
                <NavLink to="/about" className={style.button2}>CONOCEME</NavLink>
                </span>
            </button>
          </div>
        </div>
    );
  }
  
export default Landing