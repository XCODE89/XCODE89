import React, { useState, useContext, useEffect } from 'react';
import style from "./landing.module.css"
import darkModeImage from '../../assets/img/maph.png';
import { NavLink } from 'react-router-dom';
import ParticlesBackground from "../Particles/particlesBackground";
import { AuthContext } from '../../context/CounterContext';
import github from "../../images/logos/Github.png"
import linked from "../../images/logos/LinkedIn.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "< Web Developer >", "< Frontend Developer >", "< Backend Developer >" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const {setSelectedItem} = useContext(AuthContext)
    return (
      <div className={style.container}>
          <ParticlesBackground/>
          <div className={style.grid}>
            <div className={style.imageContainer}>
              <img src={darkModeImage} className={style.image} alt='personal'/>
            </div>
            <div className={style.textContainer}>
              <h1 className={style.content}>
                ¡Hola!. Soy
                <span className={style.name}> Miguel</span>
              </h1>
              <h2 className={style.content2} >{text}</h2>
              <h3 className={style.description}>Con conocimiento avanzado en desarrollo de plataformas web y aplicaciones móviles, utilizando las últimas tecnologías para crear soluciones innovadoras y efectivas.</h3>
              <button className={style.button}>
                  <span className={style.spanButton}>
                    <NavLink to="/about" className={style.button2} onClick={()=>setSelectedItem("SOBRE MI")}>CONÓCEME</NavLink>
                  </span>
              </button>

              <div className={style.socialContainer}>
                <button className={style.imageButton}>
                  <div className={style.imageBox}>
                    <a href="https://www.linkedin.com/in/dante-aponte/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={style.socialImg}/>
                    </a>
                  </div>
                </button>
                <button className={style.imageButton}>
                  <div className={style.imageBox}>
                  <a href="https://github.com/XCODE89" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={style.socialImg}/>
                  </a>
                  </div>
                </button>
                </div>
            </div>
            <div className={style.imageContainer2}>
              <img src={darkModeImage} className={style.image} alt='download'/>
            </div>
          </div>
        </div>
    );
  }

export default Landing