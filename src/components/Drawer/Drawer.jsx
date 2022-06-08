import s from './Drawer.module.scss'
import React from 'react'
import Item from './Item/Item'
import Info from '../Info/info'
import AppContext from '../../context/context'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({ onClose, onRemoveItem }) => {
   const [orderComplete, setIsOrderComplete] = React.useState(false)
   const [orderId, setOrderId] = React.useState(null)
   const [isLoading, setIsLoading] = React.useState(false)
   const { setCartItems } = React.useContext(AppContext)
   const { cartItems, totalPrice, tax } = useCart()

   const onClickOrder = async () => {
      try {
         setIsLoading(true)
         const { data } = await axios.post('https://62910b9027f4ba1c65c70b38.mockapi.io/orders', { items: cartItems })
         setOrderId(data.id)
         setIsOrderComplete(true)
         setCartItems([])



         for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://62910b9027f4ba1c65c70b38.mockapi.io/cart/' + item.id)
            await delay(1000)
         }





      } catch (error) {
         alert('Не удалось создать заказ:(')
      }
      setIsLoading(false)


   }


   const cartElements = cartItems.map((item) => <Item
      key={item.id}
      name={item.name}
      price={item.price}
      logo={item.img}
      onRemoveItem={onRemoveItem}
      id={item.id}

   />)



   return (
      <div className={s.overlay}>
         <div className={s.drawer}>
            {cartItems.length ?
               <div className={s.drawerContainer}>
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
                           <b>{totalPrice} руб.</b>
                        </li>
                        <li className={s.tax}>
                           <span>Налог 5%:</span>
                           <div></div>
                           <b>{Math.floor(tax)} руб.</b>
                        </li>
                     </ul>
                     <button disabled={isLoading} onClick={onClickOrder}>Оформить заказ</button>
                  </div>

               </div> : <Info
                  title={orderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                  img={orderComplete ? 'https://github.com/diniso4ka/react-sneakers/blob/master/public/img/offer.png?raw=true' : 'https://github.com/diniso4ka/react-sneakers/blob/master/public/img/empty.png?raw=true'}
                  description={orderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской службе.` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
               />
            }
         </div>

      </div >
   )
}

export default Drawer