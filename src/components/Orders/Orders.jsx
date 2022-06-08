import s from './Orders.module.scss'
import AppContext from '../../context/context';
import React from 'react';
import axios from 'axios';
import OrdersItem from './OrdersItem/OrdersItem';
import Info from '../Info/info';
import ContentLoader from 'react-content-loader';

const Orders = ({ isLoading }) => {
   const [orders, setOrders] = React.useState([])
   React.useEffect(() => {
      (async () => {
         const { data } = await axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/orders')
         setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      })()
   })

   const orderItems = orders.map((item, index) => <OrdersItem
      key={index}
      {...item}
      loading={isLoading}
   />
   )





   return (
      <div>
         <>
            {orderItems.length ?
               <div className={s.content
               } >
                  <div>
                     <h1>Мои заказы</h1>
                  </div>
                  <div className={s.items}>
                     {orderItems}
                  </div>
               </div > : <Info
                  title={'Заказов нет:('}
                  img={'https://github.com/diniso4ka/react-sneakers/blob/master/public/img/offer.png?raw=true'}
                  description={'Закажите хотя бы одну пару кроссовок.'} />}
         </>
      </div>

   )
}

export default Orders