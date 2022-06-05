import React from "react";
import AppContext from "../../context/context";
import s from "./info.module.scss"


const Info = ({ img, title, description }) => {
   const { setCartOpened } = React.useContext(AppContext)


   return (
      <div className={s.cartEmpty}>
         <img className="img"
            width={120}
            height={120}
            alt={'empty'}
            src={img} />
         <h2 className={s.title}>{title}</h2>
         <p className={s.text}>{description}</p>
         <button onClick={() => setCartOpened(false)} className={s.greenButton}>Вернуться назад</button>
      </div>
   )
}

export default Info