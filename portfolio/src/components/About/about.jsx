import style from "./about.module.css"

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div>
                    <h1 className={style.title}>
                        SOBRE MI
                    </h1>
                    <div className={style.shadow}>S</div>
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
                <div className={style.techs}>
                    <div>react</div>
                    <div>redux</div>
                    <div>express</div>
                    <div>nodejs</div>
                    <div>postgres</div>
                    <div>javascript</div>
                </div>
            </div>
        </div>
    )
}
export default About
