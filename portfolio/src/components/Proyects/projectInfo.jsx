import React, { useEffect } from 'react';
import projects from '../../utils/projects';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill } from "react-icons/bs";


import style from './projectInfo.module.css';
import ParticlesBackground from '../Particles/particlesBackground';

const ProjectInfo = () => {
  const { name } = useParams();
  const navigation = useNavigate()
  const project = projects.find((project) => project.name === name);

  const handleGoBack = () => {
    navigation(-1)
  }

  return (
    <div className={style.grid_container}>
      <ParticlesBackground/>
      <button onClick={handleGoBack} className={style.return}>
        <BsArrowLeftCircleFill size={40}/>
      </button>
      <div className={style.grid_item}>
        <div className={style.wrapper}>
          <div className={style.card_container}>
            <section className={style.item_card}>
                <div className={style.image_wrapper}>
                  <div className={style.techContainer}>
                    {project.tecnologies.map((tech)=> {
                      return (
                        <span className={style.tech}>{tech}</span>
                      )
                    })}
                  </div>
                  <img
                    className={style.featured_image}
                    src={project.gif}
                    alt="projectImage"
                  />
                </div>
            </section>

            <section className={style.item_card_details}>
              <div className={style.bio_block}>
                <h2 className={style.title}>{project.name}</h2>
              </div>
              <div className={style.scroll_block}>
                <p className={style.bio_text}>
                  {project.description}
                </p>
              </div>
              {project.code && 
                <div className={style.more_info}>
                  <p>
                    <a className={style.github} aria-label="Visit Git Hub" href={project.code}>
                      GITHUB
                    </a>
                  </p>
                </div>
              }
              {project.url && 
                <div className={`${style.item_buttons} ${style.back}`}>
                  <a
                    className={`${style.demo} ${style.blue} ${style.on_back}`}
                    aria-label="Go to Demo"
                    target='blank'
                    href={project.url}
                  >
                    VISITAR
                  </a>
                </div>
              }
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
