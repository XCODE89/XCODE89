import React, { useState } from 'react';
import style from "./landing.module.css"
import darkModeImage from '../../images/desconocida.jpg';
import lightModeImage from '../../images/fondo1.jpg';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  
    return (
      <div className={style.container}>
          <img src={darkModeImage} className={style.image}/>
          <div className={style.textContainer}>
            <h1 className={style.content}>¡Hola, Soy Andrea!<br/>Soy desarrollador Full Stack</h1>
            <div className={style.languajes}>
              <div>javascript</div>
              <div>python</div>
            </div>
            <NavLink to="/home" className={style.button}>CONOCEME</NavLink>
          </div>
        </div>
    );
  }
  
export default Landing