import s from './Content.module.scss'
import Card from './Card/Card';
import AppContext from '../../context/context';
import React from 'react';

const Content = ({ searchValue, items, onAddToCart, OnChangeSearchInput, onAddToFavorite, isLoading }) => {


   const arr = [{ name: 1, logo: 2, price: 3 },
   { name: 2, logo: 3, price: 4 },
   { name: 5, logo: 6, price: 7 },
   { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }]

   const { isItemAdded, isItemFavorited } = React.useContext(AppContext)


   const renderItems = () => {
      const filtredItems = items.filter((item) =>
         item.name.toLowerCase().includes(searchValue.toLowerCase()))
      return ((isLoading ? arr : filtredItems).map((item, index) => <Card
         {...item}
         key={index}
         onPlus={(obj) => onAddToCart(obj)}
         onFavorite={(obj) => onAddToFavorite(obj)}
         loading={isLoading}
         added={isItemAdded(item.name)}
         favorite={isItemFavorited(item.name)}
      />)
      )
   }



   return (
      <div className={s.content}>
         <div className={s.header}>
            <div>
               <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
            </div>
            <div className={s.search}>
               <img src='https://github.com/diniso4ka/react-sneakers/tree/master/public/img' alt='' />
               <input onChange={OnChangeSearchInput} value={searchValue} placeholder='Поиск...' />
            </div>
         </div>
         <div className={s.items}>
            {renderItems()}
         </div>
      </div>

   )
}

export default Content