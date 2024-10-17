import style from "./projectCard.module.css"
const OneProject = ({ description, photo, name, tecnologies }) => {
    console.log("uno", photo, name, description, tecnologies)
   return(
    <div className={style.cardContainer}>
        <div className={style.proj_imgbx}>
            <img src={photo} alt={name} />
            <div className={style.proj_txtx}>
                <h4>{name}</h4>
                <p>{description}</p>
                {tecnologies.map(value => {
                    return (
                        <span className={style.tech}>{value}</span>
                    )
                })}
            </div>
        </div>
    </div>
   )
}

export default OneProject;