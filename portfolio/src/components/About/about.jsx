import style from "./about.module.css"
import express from "../../images/logos/ExpressJs.png"
import mongo from "../../images/logos/MongoDB.png"
import node from "../../images/logos/NodeJs.png"
import postgre from "../../images/logos/PostgreSQL.png"
import python from "../../images/logos/Python.png"
import react from "../../images/logos/React.png"

const About = () => {
    window.scrollTo(0, 0);
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div>
                    <h1 className={style.title}>
                        SOBRE MI
                    </h1>
                    <div className={style.shadow}>
                        S
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fuga quis nulla rerum vero blanditiis perferendis quo, sequi ullam, voluptatibus eveniet dolorum dolore, laboriosam esse aliquid sed ad placeat? Mollitia?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsum eius, nemo consequatur rem illo facilis odio, voluptatum corporis numquam rerum distinctio fuga dignissimos possimus facere eaque quia, quibusdam at!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos sunt pariatur accusantium iure tenetur. Quas inventore, veritatis voluptatem quia fugit aliquid, quod quo vero iste facere, ullam facilis dolorum.
                </p>
                <div className={style.buttons}>
                    <button className={style.button}>descargar cv</button>
                </div>
                <div className={style.techsContainer}>
                    <div className={style.tech}>
                        <img src={react} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={express} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={node} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={postgre} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={mongo} className={style.image}/>
                    </div>
                    <div className={style.tech}>
                        <img src={python} className={style.image}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default About
