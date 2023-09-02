import style from "./oneProject.module.css"
const OneProject = ({imagen}) => {
   return(
    <div className={style.cardContainer}>
        <div className={style.cardImageCont}>
            <img src={imagen} className={style.cardImage}/>
        </div>
        <div className={style.tecBoxCard}>
            <div>tec 1</div>
            <div>tec 2</div>
            <div>tec 3</div>
        </div>
    </div>
   )
}

export default OneProject;