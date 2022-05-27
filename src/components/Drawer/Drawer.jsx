import s from './Drawer.module.scss'
import React from 'react'
import Item from './Item/Item'

const Drawer = ({ onClose, cartItems = [] }) => {
   const cartElements = cartItems.map((item) => <Item name={item.name} price={item.price} logo={item.img} />)



   return (
      <div className={s.overlay}>
         <div className={s.drawer}>
            <div className={s.drawerHeader}>
               <h2>Корзина</h2>
               <img onClick={onClose} width={32} className={s.removeBtn} src='https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/btn-remove-focus.svg' alt='remove' />
            </div>


            <div className={s.items}>
               {cartElements}


            </div>
            <div className={s.total}>
               <ul className={s.totalBlock}>
                  <li className={s.price}>
                     <span>Итого:</span>
                     <div></div>
                     <b>21 498 руб.</b>
                  </li>
                  <li className={s.tax}>
                     <span>Налог 5%:</span>
                     <div></div>
                     <b>1074 руб.</b>
                  </li>
               </ul>
               <button>Оформить заказ</button>
            </div>
         </div>
      </div>
   )
}

export default Drawer