import s from './Card.module.scss'

const Card = () => {
   return (
      <div className={s.item}>
         <div className={s.wrapper}>
            <img className={s.logo} src='/img/sneakers/2.jpg' width={133} height={112} />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className={s.info}>
               <div className={s.price}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
               </div>
               <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
               </button>
            </div>
         </div>
         <img className={s.favorit} src='/img/heart-unliked.svg' alt='unliked' />
      </div>
   )
}


export default Card