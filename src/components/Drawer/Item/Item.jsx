import s from './Item.module.scss'

const Item = ({ name, price, logo }) => {
   return (
      <div className={s.item}>
         <div className={s.left}>
            <img width={70} height={70} src={logo} alt='card' />
            <div className={s.info}>
               <h5>{name}</h5>
               <b>{price} руб.</b>
            </div>
         </div>
         <div>
            <img className={s.removeBtn} src='https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/btn-remove-focus.svg' alt='remove' />
         </div>
      </div>
   )
}


export default Item