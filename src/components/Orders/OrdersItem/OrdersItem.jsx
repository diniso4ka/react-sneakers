import React from 'react'
import s from './OrdersItem.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext from '../../../context/context'

const OrdersItem = ({ name, price, img, onPlus, onFavorite, id, loading }) => {
   const { isItemAdded, isItemFavorited } = React.useContext(AppContext)




   const onClickPlus = ({ }) => {
      onPlus({ name, price, img, id })
   }

   const onClickFavorite = () => {
      onFavorite({ name, price, img, id })
   }







   return (
      <div className={s.item}>
         {loading ?
            <ContentLoader
               speed={3}
               width={155}
               height={250}
               viewBox="0 0 155 265"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb">
               <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
               <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
               <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
               <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
               <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> :
            <>
               <div className={s.wrapper}>
                  <img className={s.logo} src={img} width={133} height={112} alt='logo' />
                  <h5>{name}</h5>
                  <div className={s.info}>
                     <div className={s.price}>
                        <span>ЦЕНА:</span> <br />
                        <b>{price} руб.</b>
                     </div>
                  </div>
               </div>

            </>}
      </div>

   )
}


export default OrdersItem