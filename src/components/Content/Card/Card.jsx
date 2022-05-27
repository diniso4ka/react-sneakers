import React from 'react'
import s from './Card.module.scss'

const Card = ({ name, price, logo, onPlus, onFavorit }) => {

   const addToDrawer = () => {
      alert('yes')
   }

   const [isAdded, setIsAdded] = React.useState()
   const onClickPlus = () => {
      setIsAdded(!isAdded)
   }




   return (
      <div className={s.item}>
         <div className={s.wrapper}>
            <img className={s.logo} src={logo} width={133} height={112} />
            <h5>{name}</h5>
            <div className={s.info}>
               <div className={s.price}>
                  <span>ЦЕНА:</span> <br />
                  <b>{price} руб.</b>
               </div>
               <button onClick={onClickPlus} className={s.button}>
                  <img src={isAdded ? '/img/checked.svg' : '/img/plus.svg'} width={32} />
               </button>
            </div>
         </div>
         <img onClick={onFavorit} className={s.favorit} src='/img/heart-unliked.svg' alt='unliked' />
      </div>
   )
}


export default Card