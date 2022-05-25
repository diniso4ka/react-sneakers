import s from './Item.module.scss'

const Item = () => {
   return (
      <div className={s.item}>
         <div className={s.left}>
            <img width={70} height={70} src='/img/sneakers/1.jpg' alt='card' />
            <div className={s.info}>
               <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
               <b>12 999 руб.</b>
            </div>
         </div>
         <div>
            <img className={s.removeBtn} src='/img/btn-remove-focus.svg' alt='remove' />
         </div>
      </div>
   )
}


export default Item