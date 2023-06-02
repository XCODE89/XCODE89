import React, { useState } from 'react';
import styles from "./landing.module.css"
import darkModeImage from '../../images/desconocida.jpg';
import lightModeImage from '../../images/fondo1.jpg';

const Landing = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
        <div className={`${styles.app}  ${darkMode ? styles['dark-mode'] : ''}`}>
        <header>
          <h1>¡Bienvenido a mi portfolio!</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </header>
        <div className={styles.content}>
          <img
            src={darkMode ? darkModeImage : lightModeImage}
            alt="Imagen de fondo"
          />
        </div>
      </div>
    );
  }
  
export default Landing