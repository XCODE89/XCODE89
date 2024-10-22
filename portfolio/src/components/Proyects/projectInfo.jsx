import React, { useEffect } from 'react';
import projects from '../../utils/projects';
import { useParams } from 'react-router-dom';

import style from './projectInfo.module.css'; // corregido para CSS Modules
import ParticlesBackground from '../Particles/particlesBackground';

const ProjectInfo = () => {
  const { name } = useParams();
  const project = projects.find((project) => project.name === name);

  return (
    <div className={style.grid_container}>
      <ParticlesBackground/>
      <div className={style.grid_item}>
        <div className={style.wrapper}>
          <div className={style.card_container}>
            <section className={style.item_card}>
                <div className={style.image_wrapper}>
                  <img
                    className={style.featured_image}
                    src={project.photo}
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
                    <a className={style.github} aria-label="Visit Git Hub" href="#">
                      GITHUB
                    </a>
                  </p>
                </div>
              }
              <div className={`${style.item_buttons} ${style.back}`}>
                <a
                  className={`${style.demo} ${style.blue} ${style.on_back}`}
                  aria-label="Go to Demo"
                  target='blank'
                  href={project.url}
                >
                  DEMO
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
