import s from './Drawer.module.scss'
import Item from './Item/Item'

const Drawer = () => {
   return (
      <div className={s.overlay}>
         <div className={s.drawer}>
            <div className={s.drawerHeader}>
               <h2>Корзина</h2>
               <img width={32} className={s.removeBtn} src='/img/btn-remove-focus.svg' alt='remove' />
            </div>


            <div className={s.items}>
               <Item />
               <Item />
               <Item />
               <Item />
               <Item />


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