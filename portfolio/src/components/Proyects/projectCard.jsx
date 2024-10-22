import { Link } from "react-router-dom";
import style from "./projectCard.module.css"
const OneProject = ({ description, photo, name, tecnologies }) => {
    console.log("uno", photo, name, description, tecnologies)
   return(
    <div className={style.cardContainer}>
        <div className={style.proj_imgbx}>
            <img src={photo} alt={name} />
            <div className={style.proj_txtx}>
                <h4>{name}</h4>
                <Link to={`/project/${name}`}>Conoce mas</Link>
                {/* <button >Conoce más</button> */}
                {/* <p>{description}</p> */}
                {/* <div className={style.techContainer}>
                    {tecnologies.map(value => {
                        return (
                            <span className={style.tech}>{value}</span>
                        )
                    })}
                </div> */}
            </div>
        </div>
    </div>
   )
}

export default OneProject;